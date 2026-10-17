const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'..'),ctx={window:{}};vm.createContext(ctx);
const files=['python','databases','networking','device-config','html5'];let total=0,images=0;const ids=new Set();
for(const file of files){let s=fs.readFileSync(`${root}/data/${file}.js`,'utf8');vm.runInContext(s,ctx);}
for(const [key,exam]of Object.entries(ctx.window.EXAM_DATA)){
 const chapters=new Set(exam.CHAPTERS.map(c=>c.id));
 for(const q of exam.QUESTIONS){
  assert(!ids.has(q.id),`duplicate id ${q.id}`);ids.add(q.id);total++;
  assert(chapters.has(q.chapter),`unknown chapter ${q.id}: ${q.chapter}`);
  assert(['single','multiple','true_false','dropdown','drag_drop'].includes(q.type),`type ${q.id}`);
  assert(q.question&&q.explanation,`missing content ${q.id}`);
  if(['dropdown','drag_drop'].includes(q.type)){
   assert(q.dragItems.length&&q.dropZones.length,`empty zones ${q.id}`);
   const itemids=new Set(q.dragItems.map(i=>i.id));assert(itemids.size===q.dragItems.length);
   assert(new Set(q.dropZones.map(z=>z.id)).size===q.dropZones.length);
   for(const z of q.dropZones){assert(itemids.has(z.correctItemId),`key ${q.id}`);if(z.optionIds){assert(z.optionIds.includes(z.correctItemId));z.optionIds.forEach(i=>assert(itemids.has(i)));}}
  }else {assert(q.options.length>=2,`opts ${q.id}`);const ans=Array.isArray(q.correct)?q.correct:[q.correct];assert(ans.length);ans.forEach(a=>assert(Number.isInteger(a)&&a>=0&&a<q.options.length,`key ${q.id}`));}
  for(const im of q.images||[q.image].filter(Boolean)){assert(fs.existsSync(path.join(root,im)),`missing asset ${q.id}: ${im}`);images++;}
 }
}
const html=fs.readFileSync(`${root}/index.html`,'utf8');assert(!html.includes('python-fix.js'));
for(const m of html.matchAll(/<script[^>]+src="([^"\s]+)"/g)){if(!m[1].startsWith('http'))assert(fs.existsSync(path.join(root,m[1])),`missing script ${m[1]}`);}
const report={questions:total,imageReferences:images,uniqueIDs:ids.size,status:'PASS'};fs.writeFileSync(`${root}/raport-import/validare-structura.json`,JSON.stringify(report,null,2));console.log(report);
