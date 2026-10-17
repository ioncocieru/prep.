/* ITS PREP — integrated question bank; original IDs preserved. */
window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA.html5 = {
  "id": "html5",
  "name": "HTML5 Application Development",
  "shortLabel": "WEB",
  "accent": "#E86A33",
  "description": "Practice questions for HTML5, CSS, JavaScript, browser APIs and application lifecycle management. Unofficial preparation material.",
  "CHAPTERS": [
    {
      "id": "html-forms",
      "name": "HTML and Forms"
    },
    {
      "id": "css-layout",
      "name": "CSS Layout and Responsive Design"
    },
    {
      "id": "css-effects",
      "name": "CSS Effects and Animation"
    },
    {
      "id": "javascript",
      "name": "JavaScript and Events"
    },
    {
      "id": "graphics",
      "name": "Canvas and SVG"
    },
    {
      "id": "browser-apis",
      "name": "Browser APIs and Data"
    },
    {
      "id": "lifecycle",
      "name": "Application Lifecycle Management"
    }
  ],
  "QUESTIONS": [
    {
      "chapter": "css-effects",
      "type": "single",
      "question": "What is the final color effect of this filter chain?",
      "options": [
        "Mostly sepia with no gray",
        "Mostly sepia with some gray",
        "Completely grayscale",
        "Mostly gray with some sepia"
      ],
      "correct": 2,
      "explanation": "Filters run from left to right. The final grayscale(100%) removes all color, including the sepia tint.",
      "code": ".imgfilter { filter: sepia(75%) grayscale(100%); }",
      "id": "web-001"
    },
    {
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "Match each HTML element to its purpose.",
      "dragItems": [
        {
          "id": "i1",
          "text": "output"
        },
        {
          "id": "i2",
          "text": "legend"
        },
        {
          "id": "i3",
          "text": "fieldset"
        },
        {
          "id": "i4",
          "text": "datalist"
        },
        {
          "id": "i5",
          "text": "meter"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Supplies suggested autocomplete values",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Groups related form controls",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Represents a scalar measurement in a known range",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Provides a caption for a fieldset",
          "correctItemId": "i2"
        },
        {
          "id": "z5",
          "label": "Displays a calculation result",
          "correctItemId": "i1"
        }
      ],
      "explanation": "A datalist supplies suggestions; fieldset groups controls; legend captions that group; meter displays a measurement; output displays a calculation result.",
      "id": "web-002"
    },
    {
      "chapter": "javascript",
      "type": "dropdown",
      "question": "Complete the class definition and instantiation.",
      "dragItems": [
        {
          "id": "i1",
          "text": "constructor"
        },
        {
          "id": "i2",
          "text": "new"
        },
        {
          "id": "i3",
          "text": "initiator"
        },
        {
          "id": "i4",
          "text": "initialize"
        },
        {
          "id": "i5",
          "text": "class"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i2"
        }
      ],
      "explanation": "constructor initializes instance fields. The new operator creates an instance and calls its constructor.",
      "code": "class Total {\n  [1](amount, salesTax) {\n    this.amount = amount;\n    this.salesTax = salesTax;\n  }\n  get total() { return this.calculation(); }\n  calculation() { return this.amount * (1 + this.salesTax); }\n}\nlet myTotal = [2] Total(1500, 0.075);",
      "id": "web-003"
    },
    {
      "chapter": "css-effects",
      "type": "multiple",
      "question": "Which units can the CSS saturate() filter accept? Choose two.",
      "options": [
        "Ems",
        "Percentages",
        "Unitless numbers",
        "Pixels"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "saturate(100%) and saturate(1) are equivalent. Length units such as px and em are not accepted.",
      "id": "web-004"
    },
    {
      "chapter": "browser-apis",
      "type": "multiple",
      "question": "Which two browser APIs store key-value data? Choose two.",
      "options": [
        "localStorage",
        "driveCache",
        "AppCache",
        "sessionStorage",
        "offlineStorage"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "localStorage persists across sessions, while sessionStorage is scoped to a tab session. AppCache was an obsolete resource-caching system, not Web Storage.",
      "id": "web-005"
    },
    {
      "chapter": "css-effects",
      "type": "single",
      "question": "Which web-font format can be loaded through CSS @font-face even when the font is not installed locally?",
      "options": [
        "font-family",
        "SVG element",
        "font-free",
        "WOFF"
      ],
      "correct": 3,
      "explanation": "WOFF is a web-font format. An @font-face rule can load a font resource; font-family selects a family but does not itself load it.",
      "id": "web-006"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "What do JSON.parse() and JSON.stringify() do?",
      "options": [
        "Convert between JSON text and JavaScript values",
        "Send HTTP requests automatically",
        "Render browser graphics",
        "Perform server-side image processing"
      ],
      "correct": 0,
      "explanation": "JSON.parse decodes JSON text; JSON.stringify serializes values. JSON is often used in client-server communication, but the JSON API itself does not send network requests.",
      "id": "web-007"
    },
    {
      "chapter": "browser-apis",
      "type": "multiple",
      "question": "Which three methods belong to navigator.geolocation? Choose three.",
      "options": [
        "findLocation",
        "getLocation",
        "clearWatch",
        "watchPosition",
        "getCurrentPosition",
        "watchLocation"
      ],
      "correct": [
        2,
        3,
        4
      ],
      "explanation": "getCurrentPosition requests one position; watchPosition subscribes to updates; clearWatch cancels the subscription.",
      "id": "web-008"
    },
    {
      "chapter": "lifecycle",
      "type": "single",
      "question": "After planning a website, what is the next stage in this lifecycle: Plan, Design, Develop, Test, Deploy, Maintain?",
      "options": [
        "Design",
        "Plan",
        "Test",
        "Develop"
      ],
      "correct": 0,
      "explanation": "Design translates planned requirements into architecture, layouts and interaction specifications before development begins.",
      "id": "web-009"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which subject is especially useful for calculating movement and timing in JavaScript animations?",
      "options": [
        "English",
        "History",
        "Art",
        "Mathematics"
      ],
      "correct": 3,
      "explanation": "Animation calculations use coordinates, distances, angles, interpolation and time, all of which rely on mathematics.",
      "id": "web-010"
    },
    {
      "chapter": "html-forms",
      "type": "multiple",
      "question": "Which two HTML5 elements represent a measurement and a calculation result? Choose two.",
      "options": [
        "meter",
        "autocomplete",
        "output",
        "autofocus",
        "mark"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "meter represents a scalar measurement and output represents a calculation result. autocomplete and autofocus are attributes, not form elements.",
      "id": "web-011"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which bare Boolean attribute makes an input mandatory before normal form submission?",
      "options": [
        "required",
        "None of these",
        "text/required",
        "required=\"true\""
      ],
      "correct": 0,
      "explanation": "required is a Boolean attribute: its presence enables it. The conforming bare syntax is required; required=\"true\" is not the prescribed Boolean-attribute spelling, although browsers generally treat its presence as enabled.",
      "id": "web-012"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "What does TouchEvent.targetTouches contain?",
      "options": [
        "No touch points",
        "A list of clickable screen areas",
        "Active touch points that started on the same target element",
        "Only touch points changed by the current event"
      ],
      "correct": 2,
      "explanation": "targetTouches contains active touches whose start target is the same element as the current event target. changedTouches instead contains touches changed by the event.",
      "id": "web-013"
    },
    {
      "chapter": "lifecycle",
      "type": "multiple",
      "question": "In the legacy web-application state model, which three state scopes are commonly distinguished? Choose three.",
      "options": [
        "DataLink",
        "Persist (persistent)",
        "Application",
        "Transport",
        "Presentation",
        "Session"
      ],
      "correct": [
        1,
        2,
        5
      ],
      "explanation": "Application state is shared across the application, session state belongs to a user session, and persistent state survives transient sessions. These are conceptual application-state scopes, not HTML5 execution states.",
      "id": "web-014"
    },
    {
      "chapter": "graphics",
      "type": "single",
      "question": "Where should canvas drawing instructions be placed when a button click must trigger the drawing?",
      "options": [
        "Inside a div tag as plain text",
        "Inside a style sheet",
        "Inside a JavaScript function called by the click handler",
        "Only as text in head"
      ],
      "correct": 2,
      "explanation": "A click handler calls JavaScript that draws through the canvas context. CSS declarations and plain HTML text cannot execute canvas drawing commands.",
      "id": "web-015"
    },
    {
      "chapter": "css-effects",
      "type": "single",
      "question": "Which CSS declaration rounds corners by 15 pixels?",
      "options": [
        "border-radius: 15px;",
        "border-roundness: 15px;",
        "border: radius15deg;",
        "border-radius: 15deg;"
      ],
      "correct": 0,
      "explanation": "border-radius accepts lengths and percentages, not angle units.",
      "id": "web-016"
    },
    {
      "chapter": "javascript",
      "type": "true_false",
      "question": "True or False: In a browser that permits printing, the following function is valid JavaScript and has no inherent syntax error.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Semicolons are optional here because of automatic semicolon insertion. window.print() is a valid browser method; no inherent syntax, runtime or logic error follows from this function.",
      "code": "function printPage() {\n  window.print()\n}",
      "id": "web-017"
    },
    {
      "chapter": "css-layout",
      "type": "multiple",
      "question": "Which two length units directly size an element relative to viewport width or height? Choose two.",
      "options": [
        "px",
        "vw",
        "vh",
        "cm"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "1vw is 1% of viewport width and 1vh is 1% of viewport height. Percentages normally resolve against a containing block, while em resolves against font size.",
      "id": "web-018"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "What is jQuery?",
      "options": [
        "A lightweight JavaScript library",
        "A database query language",
        "A Java-based query language",
        "A vector-graphics format"
      ],
      "correct": 0,
      "explanation": "jQuery is a JavaScript library that simplifies DOM manipulation, event handling, Ajax requests and effects.",
      "id": "web-019"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "Which flex-item property changes its visual order relative to siblings?",
      "options": [
        "flex-grow",
        "order",
        "flex-basis",
        "flex"
      ],
      "correct": 1,
      "explanation": "order controls the visual ordering of flex items. It does not change DOM order or the normal accessibility reading order.",
      "id": "web-020"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "Which anchor-element property suggests that its linked resource should be downloaded?",
      "options": [
        "Blob",
        "href",
        "download",
        "createObjectURL"
      ],
      "correct": 2,
      "explanation": "The download attribute/property requests download behavior and can suggest a filename. href supplies the URL; Blob and createObjectURL help create a downloadable resource.",
      "id": "web-021"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "What does flex-flow combine?",
      "options": [
        "Only wrapping",
        "flex-direction and flex-wrap",
        "Only vertical alignment",
        "CSS Grid configuration"
      ],
      "correct": 1,
      "explanation": "flex-flow is shorthand for flex-direction and flex-wrap.",
      "id": "web-022"
    },
    {
      "chapter": "graphics",
      "type": "multiple",
      "question": "Which two statements about SVG are accurate? Choose two.",
      "options": [
        "SVG cannot be embedded inline",
        "SVG is an XML-based vector format",
        "SVG can never be animated",
        "SVG can be animated",
        "SVG must be written in JavaScript"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "SVG describes vector graphics in XML and supports animation. Its file size depends on complexity; it is not universally smaller than raster images.",
      "id": "web-023"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "Which declaration creates a block-level grid container?",
      "options": [
        "display: grid;",
        "grid: true;",
        "display: flex-grid;",
        "show: grid;"
      ],
      "correct": 0,
      "explanation": "display: grid establishes a CSS grid formatting context.",
      "id": "web-024"
    },
    {
      "chapter": "javascript",
      "type": "multiple",
      "question": "Which three are standard touch event names? Choose three.",
      "options": [
        "touchstart",
        "touchend",
        "touchstop",
        "touchmove",
        "touchdrag",
        "touchgo"
      ],
      "correct": [
        0,
        1,
        3
      ],
      "explanation": "touchstart, touchmove and touchend describe the start, movement and end of touches. Event names are case-sensitive.",
      "id": "web-025"
    },
    {
      "chapter": "graphics",
      "type": "single",
      "question": "With default 2D canvas axes, which direction does a negative angle passed to rotate() rotate the coordinate system?",
      "options": [
        "Counterclockwise",
        "It always throws",
        "It mirrors the drawing",
        "Clockwise"
      ],
      "correct": 0,
      "explanation": "In the default canvas coordinate system, positive angles appear clockwise and negative angles counterclockwise.",
      "id": "web-026"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which HTML identifier must be unique within a document?",
      "options": [
        "id",
        "Pseudo-class",
        "Tag name",
        "Class name"
      ],
      "correct": 0,
      "explanation": "An id value must identify only one element in the document. Class names can be shared by many elements.",
      "id": "web-027"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "What normally establishes the containing block for position: absolute?",
      "options": [
        "The nearest ancestor that establishes an absolute-positioning containing block",
        "Always the physical monitor",
        "Always the immediate parent",
        "Always the viewport"
      ],
      "correct": 0,
      "explanation": "Typically the nearest positioned ancestor establishes the containing block; transforms and other properties can also establish one. Without such an ancestor, the initial containing block is used.",
      "id": "web-028"
    },
    {
      "chapter": "javascript",
      "type": "drag_drop",
      "question": "Match each event-propagation phase to its direction.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Bubbling"
        },
        {
          "id": "i2",
          "text": "Capturing"
        },
        {
          "id": "i3",
          "text": "Default action"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "From target outward through ancestors",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "From ancestors inward toward the target",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Capturing travels toward the target; bubbling travels away from it. “Event cascading” is not the standard name for capturing.",
      "id": "web-029"
    },
    {
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete the code to stroke a full circle centered at (200,150), radius 100.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ctx.arc(200, 150, 100, 0, 2 * Math.PI);"
        },
        {
          "id": "i2",
          "text": "ctx.circle(200, 150, 100);"
        },
        {
          "id": "i3",
          "text": "ctx.stroke();"
        },
        {
          "id": "i4",
          "text": "ctx.fill();"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i3"
        }
      ],
      "explanation": "arc defines a circle when the sweep is 2π. stroke draws its outline; fill would paint its interior.",
      "code": "const ctx = document.getElementById(\"Canvas1\").getContext(\"2d\");\nctx.beginPath();\n[1]\n[2]",
      "id": "web-030"
    },
    {
      "chapter": "graphics",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Inline SVG avoids a separate HTTP request for that SVG markup.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Inline SVG markup has its own independently cacheable HTTP response.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "An SVG document loaded via img can be styled internally by the embedding page’s external stylesheet.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Inline SVG is part of the HTML response and has no independent HTTP cache entry. An SVG in img is an isolated image document and does not inherit the embedding page’s styles. Avoiding a request does not universally guarantee faster loading.",
      "id": "web-031"
    },
    {
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete the SVG circle attributes.",
      "dragItems": [
        {
          "id": "i1",
          "text": "cx"
        },
        {
          "id": "i2",
          "text": "cy"
        },
        {
          "id": "i3",
          "text": "r"
        },
        {
          "id": "i4",
          "text": "stroke"
        },
        {
          "id": "i5",
          "text": "stroke-width"
        },
        {
          "id": "i6",
          "text": "fill"
        },
        {
          "id": "i7",
          "text": "rx"
        },
        {
          "id": "i8",
          "text": "background-color"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Horizontal center",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Vertical center",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Radius",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Outline color",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Outline thickness",
          "correctItemId": "i5"
        },
        {
          "id": "z6",
          "label": "Interior color",
          "correctItemId": "i6"
        }
      ],
      "explanation": "circle uses cx, cy and r. stroke and stroke-width define its outline; fill defines its interior.",
      "code": "<svg width=\"150\" height=\"120\">\n  <circle [1]=\"50\" [2]=\"70\" [3]=\"30\" [4]=\"black\" [5]=\"3\" [6]=\"red\" />\n</svg>",
      "id": "web-032"
    },
    {
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "Complete the shadow: 2px to the right, 3px upward, 5px blur, blue.",
      "dragItems": [
        {
          "id": "i1",
          "text": "2px"
        },
        {
          "id": "i2",
          "text": "-3px"
        },
        {
          "id": "i3",
          "text": "3px"
        },
        {
          "id": "i4",
          "text": "5px"
        },
        {
          "id": "i5",
          "text": "-2px"
        },
        {
          "id": "i6",
          "text": "-5px"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Horizontal offset",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Vertical offset",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Blur radius",
          "correctItemId": "i4"
        }
      ],
      "explanation": "box-shadow uses horizontal offset, vertical offset, blur radius and color. Negative vertical offset moves upward.",
      "code": "div { box-shadow: [1] [2] [3] #0000ff; }",
      "id": "web-033"
    },
    {
      "chapter": "css-effects",
      "type": "drag_drop",
      "question": "Match each 2D transform to its purpose.",
      "dragItems": [
        {
          "id": "i1",
          "text": "skew"
        },
        {
          "id": "i2",
          "text": "scale"
        },
        {
          "id": "i3",
          "text": "matrix"
        },
        {
          "id": "i4",
          "text": "translate"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Moves an element",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Changes its size",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Represents a combined 2D affine transform",
          "correctItemId": "i3"
        }
      ],
      "explanation": "translate moves; scale resizes; matrix supplies six coefficients representing a 2D affine transform.",
      "id": "web-034"
    },
    {
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "Complete the duration and keyframes keyword for this five-second bounce animation.",
      "dragItems": [
        {
          "id": "i1",
          "text": "animation-duration"
        },
        {
          "id": "i2",
          "text": "animation-length"
        },
        {
          "id": "i3",
          "text": "animation-time"
        },
        {
          "id": "i4",
          "text": "keyframes"
        },
        {
          "id": "i5",
          "text": "keyframe"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        }
      ],
      "explanation": "animation-duration sets the time; @keyframes defines the sequence. animation-fill-mode: forwards retains the final frame.",
      "code": "div {\n position: relative; animation-name: bounce;\n [1]: 5s; animation-iteration-count: 1; animation-fill-mode: forwards;\n}\n@[2] bounce {\n 0% { top: 0; } 25% { top: 100px; }\n 75% { top: 0; } 100% { top: 100px; }\n}",
      "id": "web-035"
    },
    {
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "Complete a blue drop shadow offset 5px right and 2px down, with 3px blur.",
      "dragItems": [
        {
          "id": "i1",
          "text": "filter"
        },
        {
          "id": "i2",
          "text": "drop-shadow"
        },
        {
          "id": "i3",
          "text": "5px"
        },
        {
          "id": "i4",
          "text": "2px"
        },
        {
          "id": "i5",
          "text": "3px"
        },
        {
          "id": "i6",
          "text": "#0000FF"
        },
        {
          "id": "i7",
          "text": "-2px"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "CSS property",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Filter function",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Horizontal offset",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Vertical offset",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Blur radius",
          "correctItemId": "i5"
        },
        {
          "id": "z6",
          "label": "Color",
          "correctItemId": "i6"
        }
      ],
      "explanation": "filter: drop-shadow(5px 2px 3px #0000FF) creates the required shadow around the rendered alpha shape.",
      "code": ".buzz { [1]: [2]([3] [4] [5] [6]); }",
      "id": "web-036"
    },
    {
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Complete the input type and maximum character count.",
      "dragItems": [
        {
          "id": "i1",
          "text": "tel"
        },
        {
          "id": "i2",
          "text": "phone"
        },
        {
          "id": "i3",
          "text": "telephone"
        },
        {
          "id": "i4",
          "text": "maxlength"
        },
        {
          "id": "i5",
          "text": "maxsize"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        }
      ],
      "explanation": "tel identifies telephone input and maxlength limits the number of characters. tel alone does not validate phone syntax.",
      "code": "<input type=\"[1]\" id=\"hphone\" name=\"hphone\" [2]=\"13\">",
      "id": "web-037"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Two floated elements can appear on the same line when space permits.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "float has no effect on an absolutely positioned element.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Every absolutely positioned element is positioned relative to the viewport.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Floats can share a line; absolute positioning overrides float. Absolute positioning uses its containing block, which is not necessarily the viewport.",
      "id": "web-038"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete a standard responsive viewport declaration.",
      "dragItems": [
        {
          "id": "i1",
          "text": "viewport"
        },
        {
          "id": "i2",
          "text": "scale"
        },
        {
          "id": "i3",
          "text": "media"
        },
        {
          "id": "i4",
          "text": "width=device-width"
        },
        {
          "id": "i5",
          "text": "width=screen-width"
        },
        {
          "id": "i6",
          "text": "initial-scale=1.0"
        },
        {
          "id": "i7",
          "text": "initial-scale=100"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i6"
        }
      ],
      "explanation": "The viewport meta declaration maps layout width to device width and sets the initial zoom to 1. It does not by itself prevent overflowing fixed-width content.",
      "code": "<meta name=\"[1]\" content=\"[2], [3]\">",
      "id": "web-039"
    },
    {
      "chapter": "css-layout",
      "type": "drag_drop",
      "question": "Q1 must not shrink. Q2 and Q3 have flex-grow:1. Give Q4 twice their growth factor.",
      "dragItems": [
        {
          "id": "i1",
          "text": "flex-grow: 2"
        },
        {
          "id": "i2",
          "text": "flex-grow: 200"
        },
        {
          "id": "i3",
          "text": "flex: 0"
        },
        {
          "id": "i4",
          "text": "flex: 2"
        },
        {
          "id": "i5",
          "text": "flex-shrink: none"
        },
        {
          "id": "i6",
          "text": "flex-shrink: 0"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Q1 declaration",
          "correctItemId": "i6"
        },
        {
          "id": "z2",
          "label": "Q4 declaration",
          "correctItemId": "i1"
        }
      ],
      "explanation": "flex-shrink:0 prevents shrinking. flex-grow:2 gives Q4 twice the share of extra space of items whose grow factor is 1. Growth factors do not necessarily make total widths twice as large.",
      "id": "web-040"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete one property that starts at grid line 1 and spans three columns.",
      "dragItems": [
        {
          "id": "i1",
          "text": "grid-column"
        },
        {
          "id": "i2",
          "text": "grid"
        },
        {
          "id": "i3",
          "text": "grid-row"
        },
        {
          "id": "i4",
          "text": "1 / span 3"
        },
        {
          "id": "i5",
          "text": "1 / 2"
        },
        {
          "id": "i6",
          "text": "1 / col3"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Property",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Value",
          "correctItemId": "i4"
        }
      ],
      "explanation": "grid-column:1 / span 3 starts at line 1 and spans three column tracks.",
      "code": ".feature { [1]: [2]; }",
      "id": "web-041"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete the shorthand for a 20px row gap and 10px column gap.",
      "dragItems": [
        {
          "id": "i1",
          "text": "gap"
        },
        {
          "id": "i2",
          "text": "grid-column-gap"
        },
        {
          "id": "i3",
          "text": "grid-row-gap"
        },
        {
          "id": "i4",
          "text": "20px 10px"
        },
        {
          "id": "i5",
          "text": "10px 20px"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Property",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Value",
          "correctItemId": "i4"
        }
      ],
      "explanation": "The two-value gap shorthand lists row-gap first and column-gap second. grid-gap is the older alias.",
      "code": ".rowcolgap { [1]: [2]; }",
      "id": "web-042"
    },
    {
      "chapter": "browser-apis",
      "type": "dropdown",
      "question": "Complete the asynchronous request. The onload callback displays the text response.",
      "dragItems": [
        {
          "id": "i1",
          "text": "XMLHttpRequest"
        },
        {
          "id": "i2",
          "text": "HttpRequest"
        },
        {
          "id": "i3",
          "text": "open"
        },
        {
          "id": "i4",
          "text": "request"
        },
        {
          "id": "i5",
          "text": "GET"
        },
        {
          "id": "i6",
          "text": "POST"
        },
        {
          "id": "i7",
          "text": "send"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i7"
        }
      ],
      "explanation": "XMLHttpRequest creates the request, open configures GET and asynchronous mode, and send starts it. onload handles the result.",
      "code": "function loadFile() {\n const xhttp = new [1]();\n xhttp.onload = () => {\n  if (xhttp.status === 200) document.getElementById(\"news\").textContent = xhttp.responseText;\n };\n xhttp.[2](\"[3]\", \"news.txt\", true);\n xhttp.[4]();\n}",
      "id": "web-043"
    },
    {
      "chapter": "browser-apis",
      "type": "drag_drop",
      "question": "Order the main steps used to display a Google Chart.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Load the charts package"
        },
        {
          "id": "i2",
          "text": "Create the data table and set chart values"
        },
        {
          "id": "i3",
          "text": "Set the title, height and width options"
        },
        {
          "id": "i4",
          "text": "Reference https://www.gstatic.com/charts/loader.js"
        },
        {
          "id": "i5",
          "text": "Create a chart instance and call draw(data, options)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Step 4",
          "correctItemId": "i3"
        },
        {
          "id": "z5",
          "label": "Step 5",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Load the library and package before creating chart data and options. A chart instance draws the prepared data after the package has loaded.",
      "id": "web-044"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which HTML version introduced standardized canvas, audio and video elements?",
      "options": [
        "HTML5",
        "HTML3",
        "HTML5.1 only",
        "V5 as a separate language"
      ],
      "correct": 0,
      "explanation": "HTML5 introduced these elements. Modern HTML is maintained as a Living Standard, so asking for an unspecified “current version” is misleading.",
      "id": "web-045"
    },
    {
      "chapter": "graphics",
      "type": "single",
      "question": "Which SVG animation element can animate rotation of a square?",
      "options": [
        "animateTransform",
        "circle",
        "animateMotion",
        "path"
      ],
      "correct": 0,
      "explanation": "animateTransform with type=\"rotate\" animates an element’s transform. animateMotion instead follows a motion path.",
      "id": "web-046"
    },
    {
      "chapter": "css-layout",
      "type": "multiple",
      "question": "Which two statements correctly describe media queries? Choose two.",
      "options": [
        "They apply CSS at selected viewport sizes or breakpoints",
        "They inherently guarantee faster page performance",
        "They primarily select specific browser brands",
        "They support responsive design"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Media queries test media features such as viewport width, enabling responsive layouts. They do not inherently guarantee a performance improvement.",
      "id": "web-047"
    },
    {
      "chapter": "javascript",
      "type": "multiple",
      "question": "Which two snippets define an object method? Assume Score: is inside an object literal and this refers to an instance. Choose two.",
      "options": [
        "Score: function() { /* ... */ }",
        "var a = Score();",
        "var funct = a;",
        "this.Score = function() { /* ... */ };"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "A function-valued object property is a method. Calling a function or assigning an unrelated value does not define a method.",
      "id": "web-048"
    },
    {
      "chapter": "css-effects",
      "type": "multiple",
      "question": "Which two CSS filter declarations are valid? Choose two.",
      "options": [
        "filter: blur(25%);",
        "filter: box-shadow(16px 24px 24px green);",
        "filter: opacity(25%);",
        "filter: drop-shadow(16px 16px 16px red);"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "opacity accepts a percentage; drop-shadow accepts offsets, optional blur and color. blur requires a length, and box-shadow is not a filter function.",
      "id": "web-049"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "What normally happens when float:right is applied to an image in a block formatting context?",
      "options": [
        "It moves right but text cannot flow beside it",
        "It floats to the right and inline content can wrap along its left side",
        "It floats left and text stays right",
        "It centers the image"
      ],
      "correct": 1,
      "explanation": "A right float is placed toward the right of its containing block; surrounding inline content can wrap on its left.",
      "id": "web-050"
    },
    {
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Complete the markup for suggestions associated with the vehicle input.",
      "dragItems": [
        {
          "id": "i1",
          "text": "select"
        },
        {
          "id": "i2",
          "text": "input"
        },
        {
          "id": "i3",
          "text": "datalist"
        },
        {
          "id": "i4",
          "text": "vehicle"
        },
        {
          "id": "i5",
          "text": "vehicles"
        },
        {
          "id": "i6",
          "text": "value"
        },
        {
          "id": "i7",
          "text": "</select>"
        },
        {
          "id": "i8",
          "text": "</input>"
        },
        {
          "id": "i9",
          "text": "</datalist>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9"
        }
      ],
      "explanation": "The input list attribute must match the datalist id. A datalist supplies suggestions while still allowing custom input.",
      "code": "<input list=\"vehicles\" id=\"vehicle\">\n<[1] id=\"[2]\">\n <option value=\"Motorcycle\"><option value=\"Truck\">\n <option value=\"Boat\"><option value=\"Car\">\n[3]",
      "id": "web-051"
    },
    {
      "chapter": "javascript",
      "type": "dropdown",
      "question": "Complete a click handler that calls process(), and the function declaration.",
      "dragItems": [
        {
          "id": "i1",
          "text": "onclick"
        },
        {
          "id": "i2",
          "text": "click"
        },
        {
          "id": "i3",
          "text": "process"
        },
        {
          "id": "i4",
          "text": "process()"
        },
        {
          "id": "i5",
          "text": "function process()"
        },
        {
          "id": "i6",
          "text": "javascript:process()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i5"
        }
      ],
      "explanation": "onclick is the HTML event-handler attribute. process() calls the function; function process() declares it.",
      "code": "<button [1]=\"[2]\">Process</button>\n<script>\n [3] { /* process data */ }\n</script>",
      "id": "web-052"
    },
    {
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Complete the required five-digit postal code input.",
      "dragItems": [
        {
          "id": "i1",
          "text": "type"
        },
        {
          "id": "i2",
          "text": "name"
        },
        {
          "id": "i3",
          "text": "value"
        },
        {
          "id": "i4",
          "text": "pattern"
        },
        {
          "id": "i5",
          "text": "required"
        },
        {
          "id": "i6",
          "text": "maxlength"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i5"
        }
      ],
      "explanation": "type=\"text\" preserves leading zeroes. pattern=\"[0-9]{5}\" requires exactly five digits during validation. required prevents an empty submission; pattern alone does not block every keystroke.",
      "code": "<input [1]=\"text\" id=\"post_code\" name=\"post_code\"\n [2]=\"[0-9]{5}\" title=\"5-digit postal code\" [3]>",
      "id": "web-053"
    },
    {
      "chapter": "browser-apis",
      "type": "dropdown",
      "question": "Complete the request construction, success check and JSON parsing.",
      "dragItems": [
        {
          "id": "i1",
          "text": "var xhr = new XMLHttpRequest();"
        },
        {
          "id": "i2",
          "text": "var xhr = xhr.responseXML;"
        },
        {
          "id": "i3",
          "text": "xhr.status === 200"
        },
        {
          "id": "i4",
          "text": "xhr.status === 404"
        },
        {
          "id": "i5",
          "text": "JSON.parse(xhr.responseText)"
        },
        {
          "id": "i6",
          "text": "xhr.responseXML"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Create an XMLHttpRequest, check for a successful response and parse its responseText as JSON before reading menu properties.",
      "code": "[1]\nxhr.onload = function() {\n if ([2]) {\n  const responseObject = [3];\n  const output = responseObject.menu.map(item =>\n   `${item.Entree}: ${item.Price} — ${item.Description}`).join(\"\\n\");\n  document.getElementById(\"content\").textContent = output;\n }\n};\nxhr.open(\"GET\", \"menu.json\", true);\nxhr.send();",
      "id": "web-054"
    },
    {
      "chapter": "graphics",
      "type": "single",
      "question": "An inline SVG contains <filter id=\"f2\"> with a blur primitive. Which CSS correctly references it?",
      "options": [
        "text { filter: url(\"#f2\"); }",
        "text { fill: blur; }",
        "text { filter: #blur; }",
        "text { filter: url(blur); }"
      ],
      "correct": 0,
      "explanation": "url(\"#f2\") references the filter element by its document fragment identifier. A bare #blur is not valid filter syntax.",
      "id": "web-055"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "student contains JSON text. Which code parses it and displays the student number?",
      "options": [
        "const data = JSON.parse(student); document.getElementById('screen').textContent = 'Student: ' + data.studentNum;",
        "const data = JSON.stringify(student); document.getElementByClassName('screen').innerHTML = data.studentNum;",
        "const data = JSON.parse(student); document.getElementById('screen').textContent = studentNum;",
        "document.getElementById('screen').textContent = student.studentNum;"
      ],
      "correct": 0,
      "explanation": "JSON.parse creates an object from JSON text. Its studentNum property is then available; getElementById selects the paragraph.",
      "code": "const student = '{\"studentNum\":\"12345\",\"firstName\":\"John\",\"lastName\":\"Doe\",\"emailAddress\":\"jdoe@college.edu\"}';",
      "id": "web-056"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "Which overflow value makes overflowing text scrollable only when needed?",
      "options": [
        "overflow: scroll;",
        "overflow: visible;",
        "overflow: hidden;",
        "overflow: auto;"
      ],
      "correct": 3,
      "explanation": "auto provides scrolling when content overflows. hidden clips the content and visible allows it to spill outside the box.",
      "id": "web-057"
    },
    {
      "chapter": "lifecycle",
      "type": "multiple",
      "question": "Which three tasks directly validate a released build during testing? Choose three.",
      "options": [
        "Plan a new marketing campaign",
        "Verify conformance to design specifications",
        "Check that application functionality works",
        "Find and report reproducible defects",
        "Publish the untested build",
        "Choose the initial project budget"
      ],
      "correct": [
        1,
        2,
        3
      ],
      "explanation": "Testing checks requirements, expected behavior and defects. Marketing, deployment and initial budgeting are not substitutes for validating a build.",
      "id": "web-058"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "Which CSS property prevents an element from being placed alongside specified preceding floats?",
      "options": [
        "display",
        "position",
        "float",
        "clear"
      ],
      "correct": 3,
      "explanation": "clear controls which sides of the element must not touch earlier floats, potentially moving it below them.",
      "id": "web-059"
    },
    {
      "chapter": "graphics",
      "type": "single",
      "question": "Which path does this canvas call add?",
      "options": [
        "A full circle",
        "A straight line",
        "A semicircular arc",
        "A square"
      ],
      "correct": 2,
      "explanation": "The angle interval from 0 to π is half a revolution. arc adds a path; stroke() or fill() is still needed to paint it.",
      "code": "ctx.arc(x, y, r, 0, Math.PI, true);",
      "id": "web-060"
    },
    {
      "chapter": "javascript",
      "type": "multiple",
      "question": "Which three event types can be handled on a suitably focusable/scrollable canvas element? Choose three.",
      "options": [
        "datareceived",
        "play",
        "blur",
        "mouseup",
        "scroll"
      ],
      "correct": [
        2,
        3,
        4
      ],
      "explanation": "Canvas elements can receive mouse events, focus events when focusable, and applicable element scroll events. play belongs to media elements; datareceived is not a standard canvas DOM event.",
      "id": "web-061"
    },
    {
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Require ten digits and show zeroes only as a hint, not as a stored default value.",
      "dragItems": [
        {
          "id": "i1",
          "text": "required"
        },
        {
          "id": "i2",
          "text": "pattern"
        },
        {
          "id": "i3",
          "text": "type"
        },
        {
          "id": "i4",
          "text": "placeholder"
        },
        {
          "id": "i5",
          "text": "value"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Validation attribute",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Hint attribute",
          "correctItemId": "i4"
        }
      ],
      "explanation": "pattern validates the entire nonempty value. placeholder shows a hint without setting the submitted value. required is explicitly included to reject empty input.",
      "code": "<input id=\"phone\" name=\"phone\" type=\"tel\" required [1]=\"[0-9]{10}\" [2]=\"0000000000\">",
      "id": "web-062"
    },
    {
      "chapter": "browser-apis",
      "type": "multiple",
      "question": "Which three components define the origin that scopes localStorage? Choose three.",
      "options": [
        "User credentials",
        "Scheme",
        "Hostname",
        "Query string",
        "Port"
      ],
      "correct": [
        1,
        2,
        4
      ],
      "explanation": "A web origin is the scheme, host and port tuple. Paths, queries and user credentials do not create separate localStorage origins.",
      "id": "web-063"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "const geo = navigator.geolocation. Which expression requests repeated position updates?",
      "options": [
        "geo.clearWatch(watchId)",
        "geo.getCurrentPosition(showLocation)",
        "geo.watchPosition(showLocation)",
        "geo = navigator.geolocation"
      ],
      "correct": 2,
      "explanation": "watchPosition registers a callback for position updates and returns a watch ID. clearWatch cancels that watch; getCurrentPosition requests only one position.",
      "id": "web-064"
    },
    {
      "chapter": "css-layout",
      "type": "drag_drop",
      "question": "Match each CSS property to its corresponding example values.",
      "dragItems": [
        {
          "id": "i1",
          "text": "align-items"
        },
        {
          "id": "i2",
          "text": "direction"
        },
        {
          "id": "i3",
          "text": "display"
        },
        {
          "id": "i4",
          "text": "flex-direction"
        },
        {
          "id": "i5",
          "text": "order"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "flex or inline-flex",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "flex-start, flex-end or center",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A numeric flex-item order, for example 2",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "row, row-reverse, column or column-reverse",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "rtl or ltr",
          "correctItemId": "i2"
        }
      ],
      "explanation": "display selects flex layout, align-items controls cross-axis alignment, order takes an integer, flex-direction selects main-axis direction and direction sets text direction.",
      "id": "web-065"
    },
    {
      "chapter": "javascript",
      "type": "dropdown",
      "question": "Complete the subclass header and parent constructor call.",
      "dragItems": [
        {
          "id": "i1",
          "text": "class Pet extends Dog"
        },
        {
          "id": "i2",
          "text": "class Dog super Pet"
        },
        {
          "id": "i3",
          "text": "class Dog extends Pet"
        },
        {
          "id": "i4",
          "text": "Pet(name, breed);"
        },
        {
          "id": "i5",
          "text": "super(name, breed);"
        },
        {
          "id": "i6",
          "text": "Pet.constructor(name, breed);"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5"
        }
      ],
      "explanation": "extends declares inheritance. A derived constructor calls super before accessing this.",
      "code": "class Pet {\n constructor(name, breed) { this.name = name; this.breed = breed; }\n show() { return `${this.name}: ${this.breed}`; }\n}\n[1] {\n constructor(name, breed, price, gender) {\n  [2]\n  this.price = price; this.gender = gender;\n }\n}",
      "id": "web-066"
    },
    {
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Choose the fieldset caption, slider and suggestion-list elements.",
      "dragItems": [
        {
          "id": "i1",
          "text": "legend"
        },
        {
          "id": "i2",
          "text": "h1"
        },
        {
          "id": "i3",
          "text": "label"
        },
        {
          "id": "i4",
          "text": "<input type=\"range\" id=\"donate\" value=\"15\" min=\"0\" max=\"50\">"
        },
        {
          "id": "i5",
          "text": "<meter id=\"donate\" value=\"15\" min=\"0\" max=\"50\"></meter>"
        },
        {
          "id": "i6",
          "text": "datalist"
        },
        {
          "id": "i7",
          "text": "option"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Fieldset caption element",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Interactive donation slider",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Element containing suggested amounts",
          "correctItemId": "i6"
        }
      ],
      "explanation": "legend captions a fieldset; input type=range is an interactive slider; datalist provides values for an input whose list attribute refers to it.",
      "code": "<fieldset>\n <[1]>Fundraising Campaign</[1]>\n <label for=\"donate\">Monthly Donations</label>\n [2]\n <label for=\"amount\">Choose your donation amount</label>\n <input list=\"amounts\" name=\"amount\" id=\"amount\">\n <[3] id=\"amounts\">\n  <option value=\"5 per month\"><option value=\"20 per month\"><option value=\"75 per year\">\n </[3]>\n</fieldset>",
      "id": "web-067"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which Event method prevents normal form submission so invalid data remains available for custom error messages?",
      "options": [
        "preventDefault()",
        "defaultPrevented()",
        "cancelable",
        "abort"
      ],
      "correct": 0,
      "explanation": "Calling preventDefault() on a cancelable submit event suppresses navigation/submission. The handler must separately display its custom error messages.",
      "id": "web-068"
    },
    {
      "chapter": "lifecycle",
      "type": "drag_drop",
      "question": "Match each lifecycle stage to its task.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Deploy"
        },
        {
          "id": "i2",
          "text": "Design"
        },
        {
          "id": "i3",
          "text": "Develop"
        },
        {
          "id": "i4",
          "text": "Maintain"
        },
        {
          "id": "i5",
          "text": "Plan"
        },
        {
          "id": "i6",
          "text": "Test"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Build the website",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Publish the website",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Define the layout",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Monitor and update the website",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Evaluate functionality and usability",
          "correctItemId": "i6"
        },
        {
          "id": "z6",
          "label": "Identify purpose and audience",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Plan defines requirements, design defines structure, develop builds, test validates, deploy publishes and maintain monitors and updates.",
      "id": "web-069"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "With order values Zoo Trip:1, Bears:2, Lions:3, Tigers:4, Tigers appears first.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "The selector section p selects the parent section.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "With flex-wrap:wrap and min-width:200px, items wrap when they cannot all fit on one line.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Lower order values appear first. section p selects descendant paragraphs, not the section. min-width prevents those items from shrinking below 200px; lack of space triggers wrapping.",
      "id": "web-070"
    },
    {
      "chapter": "browser-apis",
      "type": "multiple",
      "question": "Which three are Web Storage methods? Choose three.",
      "options": [
        "setItem",
        "cookie",
        "removeItem",
        "write",
        "clear"
      ],
      "correct": [
        0,
        2,
        4
      ],
      "explanation": "setItem stores a value, removeItem deletes one key and clear deletes all keys in that storage area. cookie and write are not Storage methods.",
      "id": "web-071"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which entry matches the entire pattern shown?",
      "options": [
        "AGbe-23h-234-HBG6",
        "kukX-34-4938-WJDF",
        "Kgyn-23-3978-Uhj6",
        "y7Ts-A3-4876-ASFr"
      ],
      "correct": 1,
      "explanation": "The pattern requires four letters, two digits, four digits and four letters, separated by hyphens. Only kukX-34-4938-WJDF satisfies all groups.",
      "code": "pattern=\"[a-zA-Z]{4}-[0-9]{2}-[0-9]{4}-[a-zA-Z]{4}\"",
      "id": "web-072"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which interface design choice most directly increases accidental activation of neighboring touch targets?",
      "options": [
        "Placing input areas too close together",
        "Using opaque backgrounds",
        "Using larger, well-separated controls",
        "Using high-contrast labels"
      ],
      "correct": 0,
      "explanation": "Closely spaced targets are difficult to distinguish with a finger. Adequate target size and spacing reduce accidental neighboring activations.",
      "id": "web-073"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which form correctly shows the numeric sum of inputs a and b in output c?",
      "options": [
        "<form oninput=\"c.value=Number(a.value)+Number(b.value)\"><input type=\"number\" name=\"a\" value=\"50\"> + <input type=\"number\" name=\"b\" value=\"50\"><output name=\"c\" for=\"a b\"></output></form>",
        "<form oninput=\"c.value=a.value+b.value\"><input name=\"a\" value=\"50\"><input name=\"b\" value=\"50\"><output name=\"c\"></output></form>",
        "<form><input name=\"a\"><input name=\"b\"><output name=\"c\"></output></form>"
      ],
      "correct": 0,
      "explanation": "Input.value is a string. Number converts each input before addition; otherwise 50 + 50 would concatenate to \"5050\". The oninput handler updates output c.",
      "id": "web-074"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "Which media query applies to screen viewports 480 CSS pixels wide or less?",
      "options": [
        "@media screen display and (width:480px)",
        "@media screen and (width:480px)",
        "@media screen and (max-width:480px)",
        "@media screen-width:480px"
      ],
      "correct": 2,
      "explanation": "max-width:480px includes viewport widths less than or equal to 480 CSS pixels. width:480px matches only that exact width.",
      "id": "web-075"
    },
    {
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "Match each input attribute to its role.",
      "dragItems": [
        {
          "id": "i1",
          "text": "maxlength"
        },
        {
          "id": "i2",
          "text": "multiple"
        },
        {
          "id": "i3",
          "text": "pattern"
        },
        {
          "id": "i4",
          "text": "placeholder"
        },
        {
          "id": "i5",
          "text": "required"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Specifies a regular expression for validation",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Shows an example hint while the field is empty",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Makes the input mandatory",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Allows multiple files, or multiple email addresses for type=email",
          "correctItemId": "i2"
        }
      ],
      "explanation": "pattern validates syntax, placeholder is a hint rather than a default value, required rejects empty input and multiple enables multiple values for supported input types.",
      "id": "web-076"
    },
    {
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "Complete the filter for an 80% sepia effect.",
      "dragItems": [
        {
          "id": "i1",
          "text": "sepia(80)"
        },
        {
          "id": "i2",
          "text": "sepia(20)"
        },
        {
          "id": "i3",
          "text": "sepia(20%)"
        },
        {
          "id": "i4",
          "text": "sepia(80%)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Filter value",
          "correctItemId": "i4"
        }
      ],
      "explanation": "sepia(80%) applies an 80% sepia effect. A unitless 80 is not the same as 0.8.",
      "code": ".sepia { filter: [1]; }",
      "id": "web-077"
    },
    {
      "chapter": "lifecycle",
      "type": "drag_drop",
      "question": "Order these lifecycle stages using the specified six-stage model.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Plan"
        },
        {
          "id": "i2",
          "text": "Develop"
        },
        {
          "id": "i3",
          "text": "Stage"
        },
        {
          "id": "i4",
          "text": "Maintain"
        },
        {
          "id": "i5",
          "text": "Test"
        },
        {
          "id": "i6",
          "text": "Deploy"
        },
        {
          "id": "i7",
          "text": "Design"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "i7"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Step 4",
          "correctItemId": "i5"
        },
        {
          "id": "z5",
          "label": "Step 5",
          "correctItemId": "i6"
        },
        {
          "id": "z6",
          "label": "Step 6",
          "correctItemId": "i4"
        }
      ],
      "explanation": "The stated model proceeds Plan → Design → Develop → Test → Deploy → Maintain. Stage is not an extra stage in this six-stage model.",
      "id": "web-078"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which element supplies predefined suggestions while still allowing custom text in an associated input?",
      "options": [
        "select",
        "input",
        "datalist",
        "fieldlist"
      ],
      "correct": 2,
      "explanation": "datalist provides suggestions through an input’s list attribute. select normally restricts the choice to listed options.",
      "id": "web-079"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "What does the function name after this. represent in the following call?",
      "options": [
        "Inheritance",
        "Instantiation",
        "A method",
        "A constructor declaration"
      ],
      "correct": 2,
      "explanation": "this.getTotal() calls a function stored as a property of the current object; in this context it is a method.",
      "code": "return this.getTotal();",
      "id": "web-080"
    },
    {
      "chapter": "graphics",
      "type": "multiple",
      "question": "Which three are CanvasRenderingContext2D transformation methods? Choose three.",
      "options": [
        "flip",
        "translate",
        "skewX",
        "scale",
        "shrink",
        "rotate"
      ],
      "correct": [
        1,
        3,
        5
      ],
      "explanation": "Canvas 2D exposes translate(), scale() and rotate(). Skewing is possible with transform(), but skewX() and scaleY() are not canvas context methods.",
      "id": "web-081"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "Which format is commonly used to serialize a JavaScript object for exchange with a web server?",
      "options": [
        "XML",
        "JSON",
        "HTML",
        "ASP.NET"
      ],
      "correct": 1,
      "explanation": "JSON is a standard text format for structured data and works naturally with JavaScript values. It is not itself a transport protocol.",
      "id": "web-082"
    },
    {
      "chapter": "css-effects",
      "type": "multiple",
      "question": "Which two CSS transform functions explicitly operate in three dimensions? Choose two.",
      "options": [
        "rotateX(30deg)",
        "translateZ(20px)",
        "skewY(20deg)",
        "translate(20px, 10px)"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "rotateX rotates around the X axis in 3D and translateZ moves along the Z axis. skewY and the two-argument translate are 2D transforms.",
      "id": "web-083"
    },
    {
      "chapter": "css-effects",
      "type": "multiple",
      "question": "Which three are valid CSS gradient functions? Choose three.",
      "options": [
        "repeating-radial-gradient",
        "radial-gradient",
        "linear-gradient",
        "optical-gradient",
        "transparent-gradient",
        "opaque-gradient"
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "CSS defines linear, radial and repeating radial gradients. The other names are not CSS functions.",
      "id": "web-084"
    },
    {
      "chapter": "html-forms",
      "type": "multiple",
      "question": "Which two input types provide built-in format checking for nonempty values? Choose two.",
      "options": [
        "email",
        "block",
        "url",
        "phone",
        "location"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "email and url impose format constraints. The HTML telephone type is tel, not phone; tel itself does not enforce a specific phone-number format.",
      "id": "web-085"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which function schedules a callback to run once after a delay?",
      "options": [
        "setTimeout()",
        "timer()",
        "animate()",
        "keyframes()"
      ],
      "correct": 0,
      "explanation": "setTimeout schedules a callback after a minimum delay. It does not guarantee exact timing and does not repeat automatically.",
      "id": "web-086"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which pattern attribute requires one or more ASCII letters or digits?",
      "options": [
        "pattern=\"[A-Za-z0-9]+\"",
        "pattern=\"digits\"",
        "pattern=\"{A-Z}\"",
        "pattern=\"[A-z0-9]\""
      ],
      "correct": 0,
      "explanation": "A-Z and a-z specify only letters and + requires one or more characters. A-z also includes punctuation between uppercase and lowercase ASCII ranges.",
      "id": "web-087"
    },
    {
      "chapter": "css-layout",
      "type": "multiple",
      "question": "Which two statements about ordinary CSS floats are true? Choose two.",
      "options": [
        "Floats can be moved vertically with float:up",
        "Floats always use viewport coordinates",
        "A float can be placed at the left or right of its containing block",
        "A floated box is removed from normal flow while inline content can wrap around it",
        "Floats are always centered"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "float accepts left/right (and logical equivalents), not up/down. Floats are out of normal flow but affect line boxes and text wrapping.",
      "id": "web-088"
    },
    {
      "chapter": "css-effects",
      "type": "single",
      "question": "Which CSS property changes the opacity of an entire image element?",
      "options": [
        "opacity",
        "blur",
        "brightness",
        "contrast"
      ],
      "correct": 0,
      "explanation": "opacity controls how much of the element is visible: 1 is opaque and 0 is transparent.",
      "id": "web-089"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which array method can visit each selected element to attach an event listener?",
      "options": [
        "map",
        "forEach",
        "filter",
        "do...while"
      ],
      "correct": 1,
      "explanation": "forEach runs a callback once per item and is suited to side effects such as registering listeners. A loop is not inherently necessary for one listener to handle multiple event types.",
      "id": "web-090"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "Which declaration establishes a flex container with a row main axis by default?",
      "options": [
        "display: flex;",
        "display: inline;",
        "display: block;",
        "display: contents;"
      ],
      "correct": 0,
      "explanation": "display:flex establishes flex layout; the default flex-direction is row.",
      "id": "web-091"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which JavaScript library provides built-in effects such as fadeIn() and slideDown()?",
      "options": [
        "React",
        "Node.js",
        "Angular",
        "jQuery"
      ],
      "correct": 3,
      "explanation": "jQuery provides effect methods including fadeIn and slideDown. Tooltips generally require an additional plugin or UI library, not jQuery core alone.",
      "id": "web-092"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "Which Geolocation method requests the current device position once?",
      "options": [
        "navigator.geolocation.getCurrentPosition(callback)",
        "navigator.getMyLocation()",
        "navigator.gpsLocation()",
        "navigator.gpsPosition()"
      ],
      "correct": 0,
      "explanation": "getCurrentPosition invokes callbacks with a position or an error. A secure context and user permission are generally required.",
      "id": "web-093"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which property can replace a div’s contents using HTML markup?",
      "options": [
        "content",
        "innerHTML",
        "node",
        "Value",
        "HTML"
      ],
      "correct": 1,
      "explanation": "innerHTML parses a string as HTML and replaces descendant nodes. Do not put untrusted content into it without appropriate sanitization; use textContent for plain text.",
      "id": "web-094"
    },
    {
      "chapter": "javascript",
      "type": "multiple",
      "question": "Which three are standard DOM event-handler property names? Choose three.",
      "options": [
        "onmodify",
        "onmousepoint",
        "alert",
        "onclick",
        "ondblclick",
        "onblur"
      ],
      "correct": [
        3,
        4,
        5
      ],
      "explanation": "onclick, ondblclick and onblur are standard event-handler property names. alert is a function, not an event handler property.",
      "id": "web-095"
    },
    {
      "chapter": "css-effects",
      "type": "single",
      "question": "Which declaration makes an image 75% transparent?",
      "options": [
        "opacity:0.75;",
        "transparency:0.75;",
        "transparency:0.25;",
        "opacity:0.25;"
      ],
      "correct": 3,
      "explanation": "75% transparent means 25% opaque, so opacity is 0.25. transparency is not the CSS property used here.",
      "id": "web-096"
    },
    {
      "chapter": "css-layout",
      "type": "multiple",
      "question": "Which two statements about this grid-template declaration are true? Choose two.",
      "options": [
        "It defines two columns and three rows",
        "The first row has automatic height",
        "The first column has automatic sizing",
        "It defines two rows and three columns"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "Before the slash are row sizes (100px,300px); after it are column sizes (auto,200px,400px). auto is content- and available-space-dependent.",
      "code": "grid-template: 100px 300px / auto 200px 400px;",
      "id": "web-097"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "Which Storage method saves a value under a key?",
      "options": [
        "localStorage.insert(key, value)",
        "localStorage.addItem(key, value)",
        "localStorage.setItem(key, value)",
        "localStorage.append(key, value)"
      ],
      "correct": 2,
      "explanation": "setItem writes a string value associated with a key, replacing the prior value for that key. Objects must be serialized explicitly.",
      "id": "web-098"
    },
    {
      "chapter": "browser-apis",
      "type": "multiple",
      "question": "Which three Web Storage methods save one item, read one item and delete one item? Choose three.",
      "options": [
        "setItem()",
        "refresh()",
        "getItem()",
        "synch()",
        "removeItem()",
        "retrieveItem()"
      ],
      "correct": [
        0,
        2,
        4
      ],
      "explanation": "setItem saves a key/value, getItem reads it and removeItem deletes that key. clear is also valid, but clears the entire storage area and is not one of the three operations requested.",
      "id": "web-099"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "What is the term for interpreting structured text to obtain its component values?",
      "options": [
        "Parsing",
        "Exclusion",
        "Elimination",
        "None of these"
      ],
      "correct": 0,
      "explanation": "Parsing interprets a structured representation, such as JSON or XML, to expose its components. Filtering instead selects records according to a condition.",
      "id": "web-100"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "Which technique lets JavaScript exchange data with a server and update part of a page without a full reload?",
      "options": [
        "ASP.NET alone",
        "Visual Basic",
        "AJAX",
        "SQL alone"
      ],
      "correct": 2,
      "explanation": "Ajax is asynchronous browser-server communication, commonly using fetch or XMLHttpRequest. XML is not required despite the historical name.",
      "id": "web-101"
    },
    {
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete the code to fill this rectangle pure yellow.",
      "dragItems": [
        {
          "id": "i1",
          "text": "fillStyle"
        },
        {
          "id": "i2",
          "text": "color"
        },
        {
          "id": "i3",
          "text": "#FFFF00"
        },
        {
          "id": "i4",
          "text": "#00FFFF"
        },
        {
          "id": "i5",
          "text": "#FF00FF"
        },
        {
          "id": "i6",
          "text": "fill()"
        },
        {
          "id": "i7",
          "text": "color()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i6"
        }
      ],
      "explanation": "fillStyle supplies the interior color and fill paints the current path. #FFFF00 is yellow.",
      "code": "ctx.beginPath();\nctx.rect(50,50,200,100);\nctx.[1] = \"[2]\";\nctx.[3];",
      "id": "web-102"
    },
    {
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "Order the code to draw a line from (0,0) to (100,100) on topLeftCanvas.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ctx.stroke();"
        },
        {
          "id": "i2",
          "text": "const cv = document.getElementById(\"topLeftCanvas\");"
        },
        {
          "id": "i3",
          "text": "ctx.moveTo(0,0);"
        },
        {
          "id": "i4",
          "text": "ctx.lineTo(100,100);"
        },
        {
          "id": "i5",
          "text": "const ctx = cv.getContext(\"2d\");"
        },
        {
          "id": "i6",
          "text": "ctx.beginPath();"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "i6"
        },
        {
          "id": "z4",
          "label": "Line 4",
          "correctItemId": "i3"
        },
        {
          "id": "z5",
          "label": "Line 5",
          "correctItemId": "i4"
        },
        {
          "id": "z6",
          "label": "Line 6",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Select the canvas and context, start a path, set its start and endpoint, then stroke it.",
      "id": "web-103"
    },
    {
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "Match the SVG filter primitives to their roles.",
      "dragItems": [
        {
          "id": "i1",
          "text": "feOffset"
        },
        {
          "id": "i2",
          "text": "feMerge"
        },
        {
          "id": "i3",
          "text": "feBlend"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blends two image inputs",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Offsets a filter input, often as one step in building a shadow",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Combines several filter results into a single output",
          "correctItemId": "i2"
        }
      ],
      "explanation": "feBlend blends two inputs, feOffset translates an input and feMerge composites multiple inputs. feOffset alone is not a complete drop-shadow pipeline.",
      "id": "web-104"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Text should have sufficient contrast against its background.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Headings and subheadings help organize content.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "All whitespace around content blocks should be removed.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Contrast, meaningful headings and suitable whitespace improve readability and organization.",
      "id": "web-105"
    },
    {
      "chapter": "css-effects",
      "type": "drag_drop",
      "question": "Skew the div whose id is didYouKnow by 15deg on X and 20deg on Y.",
      "dragItems": [
        {
          "id": "i1",
          "text": "20deg,15deg"
        },
        {
          "id": "i2",
          "text": "15deg,20deg"
        },
        {
          "id": "i3",
          "text": "#didYouKnow"
        },
        {
          "id": "i4",
          "text": "skewY"
        },
        {
          "id": "i5",
          "text": ".didYouKnow"
        },
        {
          "id": "i6",
          "text": "skew"
        },
        {
          "id": "i7",
          "text": "skewX"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Selector",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Transform function",
          "correctItemId": "i6"
        },
        {
          "id": "z3",
          "label": "Arguments",
          "correctItemId": "i2"
        }
      ],
      "explanation": "# selects an id. skew(ax,ay) applies the horizontal and vertical skew angles in that order.",
      "code": "div[1] { transform: [2]([3]); }",
      "id": "web-106"
    },
    {
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "Complete a three-pixel blur.",
      "dragItems": [
        {
          "id": "i1",
          "text": "gaussian"
        },
        {
          "id": "i2",
          "text": "filter"
        },
        {
          "id": "i3",
          "text": "blur"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Property",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Function",
          "correctItemId": "i3"
        }
      ],
      "explanation": "The CSS declaration is filter:blur(3px); blur requires a nonnegative length.",
      "code": ".bkblur { [1]: [2](3px); }",
      "id": "web-107"
    },
    {
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Choose the element and closing tag for a dropdown that restricts users to listed options.",
      "dragItems": [
        {
          "id": "i1",
          "text": "datalist"
        },
        {
          "id": "i2",
          "text": "select"
        },
        {
          "id": "i3",
          "text": "fieldset"
        },
        {
          "id": "i4",
          "text": "label"
        },
        {
          "id": "i5",
          "text": "</datalist>"
        },
        {
          "id": "i6",
          "text": "</select>"
        },
        {
          "id": "i7",
          "text": "</fieldset>"
        },
        {
          "id": "i8",
          "text": "</label>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Opening element",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Closing tag",
          "correctItemId": "i6"
        }
      ],
      "explanation": "select contains option elements and presents a selection control. datalist instead suggests values for a separate input.",
      "code": "<[1] id=\"seasons\">\n <option>Winter</option><option>Spring</option>\n <option>Summer</option><option>Fall</option>\n[2]",
      "id": "web-108"
    },
    {
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "Match each input type to its use.",
      "dragItems": [
        {
          "id": "i1",
          "text": "phone"
        },
        {
          "id": "i2",
          "text": "number"
        },
        {
          "id": "i3",
          "text": "text"
        },
        {
          "id": "i4",
          "text": "tel"
        },
        {
          "id": "i5",
          "text": "range"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Telephone-number entry",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Default input type",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Slider control",
          "correctItemId": "i5"
        }
      ],
      "explanation": "tel is the telephone input type, text is the default and range provides a slider. tel does not impose a universal phone-number format.",
      "id": "web-109"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An ordinary block box with auto width normally uses available inline space.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A non-replaced inline box normally uses the width needed by its content.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "An ordinary block box in normal flow starts in the middle of a text line.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Under ordinary block/inline normal-flow behavior, block boxes start on a new line and auto-width blocks use available width. Inline boxes flow with text. Explicit sizing or other layout modes can change these behaviors.",
      "id": "web-110"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Match the overflow declarations to the required behavior.",
      "dragItems": [
        {
          "id": "i1",
          "text": "scroll"
        },
        {
          "id": "i2",
          "text": "hidden"
        },
        {
          "id": "i3",
          "text": "visible"
        },
        {
          "id": "i4",
          "text": "show"
        },
        {
          "id": "i5",
          "text": "none"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Always request scrollbars, subject to platform overlay behavior",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Clip overflow without visible user scrollbars",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Allow content to paint outside the box",
          "correctItemId": "i3"
        }
      ],
      "explanation": "overflow:scroll requests scrollbars, hidden clips overflow, and visible allows overflow to be painted outside the box. Platform overlay scrollbars may still auto-hide.",
      "code": ".scrollbars { overflow: [1]; }\n.noscroll { overflow: [2]; }\n.outside { overflow: [3]; }",
      "id": "web-111"
    },
    {
      "chapter": "css-layout",
      "type": "drag_drop",
      "question": "Complete the rule so declared widths and heights include padding and borders for all selected elements.",
      "dragItems": [
        {
          "id": "i1",
          "text": "content-box"
        },
        {
          "id": "i2",
          "text": "html"
        },
        {
          "id": "i3",
          "text": "*"
        },
        {
          "id": "i4",
          "text": "box-sizing"
        },
        {
          "id": "i5",
          "text": "border-box"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Selector",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Property",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Value",
          "correctItemId": "i5"
        }
      ],
      "explanation": "The universal selector selects elements and box-sizing:border-box includes padding and border in declared dimensions. Pseudo-elements need their own selectors if the same sizing is desired.",
      "code": "[1] { [2]: [3]; }",
      "id": "web-112"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete the query to make the background white at screen widths of 640px or less.",
      "dragItems": [
        {
          "id": "i1",
          "text": "media"
        },
        {
          "id": "i2",
          "text": "(max-width: 640px)"
        },
        {
          "id": "i3",
          "text": "min-width: 640px"
        },
        {
          "id": "i4",
          "text": "max-width: 640px"
        },
        {
          "id": "i5",
          "text": "(min-width:640px)"
        },
        {
          "id": "i6",
          "text": "screen"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Rule keyword",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Media type",
          "correctItemId": "i6"
        },
        {
          "id": "z3",
          "label": "Condition",
          "correctItemId": "i2"
        }
      ],
      "explanation": "@media only screen and (max-width:640px) applies to screens at or below that viewport width.",
      "code": "@[1] only [2] and [3] { body { background-color: white; } }",
      "id": "web-113"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Assume sufficient space and flex-shrink:0 on all items. Set img3’s flex base size to 300px.",
      "dragItems": [
        {
          "id": "i1",
          "text": "style"
        },
        {
          "id": "i2",
          "text": "span"
        },
        {
          "id": "i3",
          "text": "css"
        },
        {
          "id": "i4",
          "text": "flex-basis:300px"
        },
        {
          "id": "i5",
          "text": "flex-grow:300px"
        },
        {
          "id": "i6",
          "text": "flex-shrink:300px"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Attribute",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Declaration",
          "correctItemId": "i4"
        }
      ],
      "explanation": "style supplies inline CSS. flex-basis sets the initial main-axis size; preventing shrinking and providing enough space keeps it at that size.",
      "code": "<div style=\"display:flex\">\n <div style=\"flex-shrink:0\">img1</div>\n <div style=\"flex-shrink:0\">img2</div>\n <div [1]=\"flex-shrink:0; [2]\">img3</div>\n</div>",
      "id": "web-114"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete a three-column grid: 200px, 250px, then remaining space.",
      "dragItems": [
        {
          "id": "i1",
          "text": "grid"
        },
        {
          "id": "i2",
          "text": "grid-container"
        },
        {
          "id": "i3",
          "text": "grid-template-columns"
        },
        {
          "id": "i4",
          "text": "remainder"
        },
        {
          "id": "i5",
          "text": "auto"
        },
        {
          "id": "i6",
          "text": "grid-template-rows"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Display value",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Track property",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Third track",
          "correctItemId": "i5"
        }
      ],
      "explanation": "display:grid establishes grid layout. grid-template-columns sizes columns; the auto track can stretch into remaining space in this simple single-auto-track layout.",
      "code": ".threegrid { display: [1]; [2]: 200px 250px [3]; }",
      "id": "web-115"
    },
    {
      "chapter": "javascript",
      "type": "drag_drop",
      "question": "Match each code snippet to its object-oriented concept.",
      "dragItems": [
        {
          "id": "i1",
          "text": "class Tricycle extends Bicycle {}"
        },
        {
          "id": "i2",
          "text": "class Bicycle {}"
        },
        {
          "id": "i3",
          "text": "this.bicyclename = brand;"
        },
        {
          "id": "i4",
          "text": "let myBicycle = new Tricycle(\"Saturn\",\"Silver\");"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Instantiation",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Property assignment",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Inheritance",
          "correctItemId": "i1"
        }
      ],
      "explanation": "new creates an instance, assignment to this.bicyclename sets a property and extends establishes inheritance.",
      "id": "web-116"
    },
    {
      "chapter": "browser-apis",
      "type": "single",
      "question": "Which DOM method returns all shirt elements from an XML document?",
      "options": [
        "getElementsByTagName",
        "getElementsByName",
        "getElementById"
      ],
      "correct": 0,
      "explanation": "getElementsByTagName(\"shirt\") returns matching elements, not their text automatically. Read the required name attribute or direct text separately; textContent includes descendant text.",
      "code": "const shirts = xmlDoc.[method](\"shirt\");",
      "id": "web-117"
    },
    {
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "Complete the class for a five-pixel blur.",
      "dragItems": [
        {
          "id": "i1",
          "text": "blur(5px)"
        },
        {
          "id": "i2",
          "text": "blur(10px)"
        },
        {
          "id": "i3",
          "text": "blur(50%)"
        },
        {
          "id": "i4",
          "text": "blur(5%)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Filter",
          "correctItemId": "i1"
        }
      ],
      "explanation": "blur uses a length. blur(5px) applies the requested five-pixel Gaussian blur.",
      "code": ".blurred { filter: [1]; }",
      "id": "web-118"
    },
    {
      "chapter": "lifecycle",
      "type": "single",
      "question": "In the specified Plan → Design → Develop → Test → Deploy → Maintain model, which stage follows Design?",
      "options": [
        "Test",
        "Deploy",
        "Develop",
        "Plan"
      ],
      "correct": 2,
      "explanation": "After the design is approved, development implements it before formal testing and deployment.",
      "id": "web-119"
    },
    {
      "chapter": "css-effects",
      "type": "multiple",
      "question": "Which three are valid CSS gradient functions? Choose three.",
      "options": [
        "conic-gradient",
        "radial-gradient",
        "linear-gradient",
        "circular-gradient",
        "depth-gradient",
        "multi-gradient"
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "CSS supports conic, radial and linear gradients. The remaining function names are not defined.",
      "id": "web-120"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "What does background-size:cover do while preserving aspect ratio?",
      "options": [
        "Repeats the image without scaling",
        "Distorts the image to fill the container",
        "Scales to cover the container, potentially cropping part of the image",
        "Never resizes the image"
      ],
      "correct": 2,
      "explanation": "cover scales proportionally until the whole container is covered. Some of the image may lie outside the container and be cropped.",
      "id": "web-121"
    },
    {
      "chapter": "html-forms",
      "type": "multiple",
      "question": "Which three of these are valid HTML input types? Choose three.",
      "options": [
        "number",
        "dropdown",
        "tel",
        "color",
        "label"
      ],
      "correct": [
        0,
        2,
        3
      ],
      "explanation": "number, tel and color are valid types. dropdown is normally implemented with select. tel is valid but does not enforce a particular phone-number syntax.",
      "id": "web-122"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which function repeatedly runs a callback at a requested time interval?",
      "options": [
        "setInterval()",
        "delay()",
        "transition()",
        "frameRate()"
      ],
      "correct": 0,
      "explanation": "setInterval schedules repeated callbacks. Browser workload and throttling can delay callbacks; requestAnimationFrame is often better for visual animation.",
      "id": "web-123"
    },
    {
      "chapter": "html-forms",
      "type": "single",
      "question": "Which pattern validates one or more ASCII digits?",
      "options": [
        "pattern=\"[0-9]+\"",
        "pattern=\"digits\"",
        "pattern=\"numeric-range\"",
        "pattern=\"{0-9}\""
      ],
      "correct": 0,
      "explanation": "[0-9]+ matches one or more digits. HTML pattern validation applies to the entire nonempty input; it does not prevent every invalid keystroke.",
      "id": "web-124"
    },
    {
      "chapter": "css-layout",
      "type": "single",
      "question": "Which combination creates a flex row and puts equal free space between adjacent items?",
      "options": [
        "display:flex; justify-content:space-between;",
        "display:block; margin:auto;",
        "display:inline-block; text-align:center;",
        "display:grid; grid-template-columns:auto;"
      ],
      "correct": 0,
      "explanation": "Flex layout defaults to a row. space-between distributes free main-axis space between items, with no extra space at the ends.",
      "id": "web-125"
    },
    {
      "chapter": "javascript",
      "type": "single",
      "question": "Which property replaces an element’s contents with plain text?",
      "options": [
        "textContent",
        "setValue",
        "modifyText",
        "innerCode"
      ],
      "correct": 0,
      "explanation": "textContent sets plain text without parsing it as HTML. This avoids interpreting untrusted text as markup.",
      "id": "web-126"
    },
    {
      "chapter": "javascript",
      "type": "multiple",
      "question": "Which four are standard event-handler property names? Choose four.",
      "options": [
        "onhover",
        "onkeypress",
        "triggerEvent",
        "onfocus",
        "onsubmit",
        "onresize"
      ],
      "correct": [
        1,
        3,
        4,
        5
      ],
      "explanation": "onkeypress, onfocus, onsubmit and onresize are recognized handler names, although keypress is deprecated. Use lowercase property names; onhover is not a standard DOM event-handler property.",
      "id": "web-127"
    },
    {
      "chapter": "css-effects",
      "type": "single",
      "question": "Which declaration makes an image 40% transparent?",
      "options": [
        "opacity:0.6;",
        "visibility:hidden;",
        "opacity:0.4;",
        "filter:blur(40%);"
      ],
      "correct": 0,
      "explanation": "40% transparent means 60% opaque, so opacity is 0.6.",
      "id": "web-128"
    },
    {
      "chapter": "css-layout",
      "type": "multiple",
      "question": "Which two statements describe this grid-template declaration? Choose two.",
      "options": [
        "It defines two columns and two rows",
        "The second row is automatically sized",
        "The first column has twice the fraction of the second",
        "It defines three rows and two columns"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Rows before the slash are 150px and auto. Columns after it are 1fr and 2fr, so the second column has the larger fractional share.",
      "code": "grid-template: 150px auto / 1fr 2fr;",
      "id": "web-129"
    },
    {
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete the code to fill the circle pure red.",
      "dragItems": [
        {
          "id": "i1",
          "text": "fillStyle"
        },
        {
          "id": "i2",
          "text": "paintStyle"
        },
        {
          "id": "i3",
          "text": "#FF0000"
        },
        {
          "id": "i4",
          "text": "#0000FF"
        },
        {
          "id": "i5",
          "text": "fill()"
        },
        {
          "id": "i6",
          "text": "stroke()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i5"
        }
      ],
      "explanation": "#FF0000 is red. fillStyle sets the interior color, and fill paints the path.",
      "code": "ctx.beginPath();\nctx.arc(100,100,50,0,Math.PI*2);\nctx.[1] = \"[2]\";\nctx.[3];",
      "id": "web-130"
    },
    {
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "Order the code to draw a line from (50,50) to (200,50).",
      "dragItems": [
        {
          "id": "i1",
          "text": "ctx.stroke();"
        },
        {
          "id": "i2",
          "text": "const canvas = document.getElementById(\"canvasArea\");"
        },
        {
          "id": "i3",
          "text": "ctx.moveTo(50,50);"
        },
        {
          "id": "i4",
          "text": "ctx.lineTo(200,50);"
        },
        {
          "id": "i5",
          "text": "const ctx = canvas.getContext(\"2d\");"
        },
        {
          "id": "i6",
          "text": "ctx.beginPath();"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "i6"
        },
        {
          "id": "z4",
          "label": "Line 4",
          "correctItemId": "i3"
        },
        {
          "id": "z5",
          "label": "Line 5",
          "correctItemId": "i4"
        },
        {
          "id": "z6",
          "label": "Line 6",
          "correctItemId": "i1"
        }
      ],
      "explanation": "beginPath is the correct method; startPath does not exist on CanvasRenderingContext2D. Define the path before stroking it.",
      "id": "web-131"
    },
    {
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "Match each SVG filter primitive to its role.",
      "dragItems": [
        {
          "id": "i1",
          "text": "feOffset"
        },
        {
          "id": "i2",
          "text": "feGaussianBlur"
        },
        {
          "id": "i3",
          "text": "feComponentTransfer"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blurs its input",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Can remap color components for brightness or contrast",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Translates its input on the X/Y axes",
          "correctItemId": "i1"
        }
      ],
      "explanation": "feGaussianBlur blurs; feComponentTransfer remaps color components; feOffset translates an input image.",
      "id": "web-132"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A serif/sans-serif label alone guarantees which font is most readable on every screen.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Line height should always be smaller than font size.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Too many competing font styles can reduce readability.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Readability depends on the particular font, size, spacing, contrast and context. Small line heights can cause collisions; limiting competing styles often improves consistency.",
      "id": "web-133"
    },
    {
      "chapter": "css-effects",
      "type": "drag_drop",
      "question": "Rotate the div with id funFact by 30deg in 2D.",
      "dragItems": [
        {
          "id": "i1",
          "text": "rotate(30deg)"
        },
        {
          "id": "i2",
          "text": "rotateY(30deg)"
        },
        {
          "id": "i3",
          "text": "#funFact"
        },
        {
          "id": "i4",
          "text": ".funFact"
        },
        {
          "id": "i5",
          "text": "skewX(30deg)"
        },
        {
          "id": "i6",
          "text": "rotateX(30deg)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Selector",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Transform",
          "correctItemId": "i1"
        }
      ],
      "explanation": "#funFact selects the id. rotate(30deg) is the ordinary 2D rotation.",
      "code": "div[1] { transform: [2]; }",
      "id": "web-134"
    },
    {
      "chapter": "css-effects",
      "type": "drag_drop",
      "question": "Convert images in bwEffect to full grayscale.",
      "dragItems": [
        {
          "id": "i1",
          "text": "grayscale"
        },
        {
          "id": "i2",
          "text": "filter"
        },
        {
          "id": "i3",
          "text": "contrast"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Property",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Function",
          "correctItemId": "i1"
        }
      ],
      "explanation": "filter:grayscale(100%) removes image color.",
      "code": ".bwEffect { [1]: [2](100%); }",
      "id": "web-135"
    },
    {
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "Match the input types to their uses.",
      "dragItems": [
        {
          "id": "i1",
          "text": "email"
        },
        {
          "id": "i2",
          "text": "text"
        },
        {
          "id": "i3",
          "text": "date"
        },
        {
          "id": "i4",
          "text": "calendar"
        },
        {
          "id": "i5",
          "text": "string"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Email address",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Default text entry",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Calendar date",
          "correctItemId": "i3"
        }
      ],
      "explanation": "email validates email syntax, text is the default type and date represents a calendar date. calendar and string are not input types.",
      "id": "web-136"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An ordinary block box in normal flow starts on a new line.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "width and height directly size an ordinary non-replaced inline box.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A block-level element can contain inline content.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Ordinary block boxes start new lines. Non-replaced inline boxes do not take width/height like block boxes, although replaced inline elements such as images can. Block containers can contain inline content.",
      "id": "web-137"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Choose overflow values for scroll-on-demand, clipping with programmatic scrolling still possible, and visible overflow.",
      "dragItems": [
        {
          "id": "i1",
          "text": "auto"
        },
        {
          "id": "i2",
          "text": "scroll"
        },
        {
          "id": "i3",
          "text": "expand"
        },
        {
          "id": "i4",
          "text": "hidden"
        },
        {
          "id": "i5",
          "text": "clip"
        },
        {
          "id": "i6",
          "text": "none"
        },
        {
          "id": "i7",
          "text": "visible"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "autoScroll",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "hiddenContent",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "expanded",
          "correctItemId": "i7"
        }
      ],
      "explanation": "auto enables scrolling when necessary, hidden clips while permitting programmatic scrolling, and visible paints outside the box. clip also clips, but does not create a scroll container.",
      "id": "web-138"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete the query for a light-gray background at widths up to 480px.",
      "dragItems": [
        {
          "id": "i1",
          "text": "media"
        },
        {
          "id": "i2",
          "text": "(max-width:480px)"
        },
        {
          "id": "i3",
          "text": "min-width:480px"
        },
        {
          "id": "i4",
          "text": "max-width:480px"
        },
        {
          "id": "i5",
          "text": "(min-width:480px)"
        },
        {
          "id": "i6",
          "text": "screen"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Rule keyword",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Media type",
          "correctItemId": "i6"
        },
        {
          "id": "z3",
          "label": "Condition",
          "correctItemId": "i2"
        }
      ],
      "explanation": "A max-width media condition includes widths equal to or below the threshold.",
      "code": "@[1] only [2] and [3] { body { background-color:lightgray; } }",
      "id": "web-139"
    },
    {
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Assume the other items stay 150px wide and no item can shrink. Set box3 to 300px.",
      "dragItems": [
        {
          "id": "i1",
          "text": "class"
        },
        {
          "id": "i2",
          "text": "style"
        },
        {
          "id": "i3",
          "text": "id"
        },
        {
          "id": "i4",
          "text": "flex-grow:2"
        },
        {
          "id": "i5",
          "text": "width:300px"
        },
        {
          "id": "i6",
          "text": "flex-shrink:2"
        },
        {
          "id": "i7",
          "text": "flex-basis:2"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Attribute",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Declaration",
          "correctItemId": "i5"
        }
      ],
      "explanation": "width:300px sets the requested width under the stated no-shrink assumption. flex-grow:2 only sets the share of extra space and does not guarantee twice the total width.",
      "code": "<div style=\"display:flex\">\n <div style=\"width:150px; flex-shrink:0\">box1</div>\n <div style=\"width:150px; flex-shrink:0\">box2</div>\n <div [1]=\"flex-shrink:0; [2]\">box3</div>\n</div>",
      "id": "web-140"
    },
    {
      "chapter": "css-layout",
      "type": "drag_drop",
      "question": "Create columns of 150px, 300px and the remaining free space, using an explicit fractional track.",
      "dragItems": [
        {
          "id": "i1",
          "text": "grid"
        },
        {
          "id": "i2",
          "text": "flex"
        },
        {
          "id": "i3",
          "text": "grid-template-columns"
        },
        {
          "id": "i4",
          "text": "1fr"
        },
        {
          "id": "i5",
          "text": "auto"
        },
        {
          "id": "i6",
          "text": "grid-template-rows"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Display value",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Property",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Third track",
          "correctItemId": "i4"
        }
      ],
      "explanation": "grid-template-columns sets column tracks. 1fr allocates the remaining fraction of free space in this simple layout.",
      "code": ".product-grid { display:[1]; [2]:150px 300px [3]; }",
      "id": "web-141"
    },
    {
      "chapter": "javascript",
      "type": "drag_drop",
      "question": "Match each snippet to its object-oriented concept.",
      "dragItems": [
        {
          "id": "i1",
          "text": "class Car {}"
        },
        {
          "id": "i2",
          "text": "this.color = \"red\";"
        },
        {
          "id": "i3",
          "text": "drive(speed) { return speed * 2; }"
        },
        {
          "id": "i4",
          "text": "let myCar = new Car(\"Tesla\");"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Instantiation",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Property assignment",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Method definition",
          "correctItemId": "i3"
        }
      ],
      "explanation": "new instantiates the class, this.color stores an instance property and drive defines a method in a class body.",
      "id": "web-142"
    },
    {
      "chapter": "browser-apis",
      "type": "multiple",
      "question": "Which two selectors return all title elements in an XML document? Choose two.",
      "options": [
        "xmlDoc.getElementsByTagName(\"title\")",
        "xmlDoc.querySelectorAll(\"title\")",
        "xmlDoc.getElementById(\"title\")"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Both getElementsByTagName and querySelectorAll can select all title elements. getElementById selects only an element with a matching ID. Extract their text separately; selection alone does not exclude nested text.",
      "id": "web-143"
    },
    {
      "chapter": "css-effects",
      "type": "multiple",
      "question": "Which two functions define 2D CSS transforms? Choose two.",
      "options": [
        "move()",
        "skew()",
        "zoom()",
        "matrix()",
        "scroll()"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "skew() and matrix() are CSS 2D transform functions. translate() is used for movement; move() is not a CSS transform function.",
      "id": "web-144"
    },
    {
      "id": "web-145",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Use these explicit breakpoints for the illustrated layouts: mobile up to 480px; tablet 481–1024px; desktop 1025px and wider, with no upper bound. Select each media query.",
      "explanation": "The ranges follow the explicit requirements and cover small mobile widths as well. The picture alone does not define numeric breakpoints.",
      "image": "assets/html5/pdf-072-responsive-wireframes.png",
      "imageAlt": "responsive wireframes",
      "dragItems": [
        {
          "id": "i1",
          "text": "@media only screen and (min-width:1025px)"
        },
        {
          "id": "i2",
          "text": "@media only screen and (min-width:481px) and (max-width:1024px)"
        },
        {
          "id": "i3",
          "text": "@media only screen and (max-width:480px)"
        },
        {
          "id": "i4",
          "text": "@media only screen and (min-width:1920px)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Desktop",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Tablet",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Mobile",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-146",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Complete the CSS for the two-row, four-column Team Building grid shown. Use automatic-width columns and a 10px gap in both directions.",
      "explanation": "display:grid creates the grid. Four auto tracks create four columns. gap:10px applies spacing on both axes.",
      "code": ".grid-container {\n [1];\n [2];\n [3];\n padding:10px; background:#336699;\n}",
      "image": "assets/html5/pdf-066-team-grid.png",
      "imageAlt": "team grid",
      "dragItems": [
        {
          "id": "i1",
          "text": "display:inline"
        },
        {
          "id": "i2",
          "text": "display:flex"
        },
        {
          "id": "i3",
          "text": "display:grid"
        },
        {
          "id": "i4",
          "text": "display:inline-flex"
        },
        {
          "id": "i5",
          "text": "grid-template-columns:auto auto auto auto"
        },
        {
          "id": "i6",
          "text": "grid-template-columns:200px 100px"
        },
        {
          "id": "i7",
          "text": "grid-template-columns:auto"
        },
        {
          "id": "i8",
          "text": "gap:10px"
        },
        {
          "id": "i9",
          "text": "column-gap:10px"
        },
        {
          "id": "i10",
          "text": "row-gap:10px"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Container display",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Column definition",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "Both row and column gaps",
          "correctItemId": "i8"
        }
      ]
    },
    {
      "id": "web-147",
      "chapter": "html-forms",
      "type": "single",
      "question": "For the shown ordinary text input with maxlength=\"9\", what normally happens when the user types or pastes a tenth character?",
      "options": [
        "A length error must appear only at submission",
        "The control prevents user entry beyond nine characters",
        "A length error must appear when focus leaves",
        "A mandatory alert appears after each keypress"
      ],
      "correct": 1,
      "explanation": "For ordinary user editing, maxlength prevents the text value from exceeding nine characters. minlength applies validation at submission; script assignments are a different case.",
      "image": "assets/html5/pdf-051-postalcode-form.png",
      "imageAlt": "postalcode form"
    },
    {
      "id": "web-148",
      "chapter": "css-layout",
      "type": "single",
      "question": "How does background-size:cover size a background image?",
      "options": [
        "It always preserves the native pixel size",
        "It resizes the container",
        "It guarantees the entire image is visible",
        "It covers the entire background area while preserving aspect ratio; part may be cropped"
      ],
      "correct": 3,
      "explanation": "cover scales the image until the area is covered. contain would fit the whole image and can leave uncovered space.",
      "image": "assets/html5/pdf-052-background-cover.png",
      "imageAlt": "background cover"
    },
    {
      "id": "web-149",
      "chapter": "html-forms",
      "type": "single",
      "question": "The telephone input shown uses pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" and no maxlength. What happens if a user submits a nonempty value containing ten unseparated digits?",
      "options": [
        "Typing is blocked after nine digits",
        "Native validation normally rejects the value on submission",
        "Extra digits are silently deleted",
        "The pattern is ignored for all tel inputs"
      ],
      "correct": 1,
      "explanation": "A pattern checks validity; it does not impose a typing limit. The value must contain the specified hyphens. The pattern actually requests ten digits, not nine.",
      "image": "assets/html5/pdf-064-phone-pattern.png",
      "imageAlt": "phone pattern"
    },
    {
      "id": "web-150",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "Execution pauses before the numbered blank lines 26, 29 and 32 in the screenshot. How many entries are in groceries at each pause?",
      "explanation": "addVegetables adds five items. Then shift removes one and addFruits adds four (the fruits array was shifted earlier), giving eight. pop and shift remove two, leaving six.",
      "image": "assets/html5/pdf-065-groceries-debug.png",
      "imageAlt": "groceries debug",
      "dragItems": [
        {
          "id": "i1",
          "text": "0"
        },
        {
          "id": "i2",
          "text": "4"
        },
        {
          "id": "i3",
          "text": "5"
        },
        {
          "id": "i4",
          "text": "6"
        },
        {
          "id": "i5",
          "text": "8"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Before line 26",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Before line 29",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "Before line 32",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "web-151",
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "Identify the filters in the three stacked images, from top to bottom. The unfiltered source corresponds to the full-color bottom image.",
      "explanation": "The first is sepia-tinted, the middle is faded by reduced opacity, and saturate(100%) retains the source saturation.",
      "image": "assets/html5/pdf-067-image-filters.png",
      "imageAlt": "image filters",
      "dragItems": [
        {
          "id": "i1",
          "text": "sepia(100%)"
        },
        {
          "id": "i2",
          "text": "opacity(30%)"
        },
        {
          "id": "i3",
          "text": "saturate(100%)"
        },
        {
          "id": "i4",
          "text": "grayscale(100%)"
        },
        {
          "id": "i5",
          "text": "drop-shadow(8px 8px 10px black)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Top image",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Middle image",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Bottom image",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-152",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete the SVG element names and endpoint for the white details of the cube logo.",
      "explanation": "An ellipse uses rx and ry. A line uses two coordinate endpoints. The right diagonal joins (200,365) to (350,100).",
      "code": "<[1] cx=\"200\" cy=\"100\" rx=\"20\" ry=\"10\" fill=\"white\" />\n<[2] x1=\"200\" y1=\"365\" x2=\"50\" y2=\"100\" stroke=\"white\" />\n<[3] x1=\"200\" y1=\"365\" [4] stroke=\"white\" />",
      "image": "assets/html5/pdf-073-svg-cube.png",
      "imageAlt": "svg cube",
      "dragItems": [
        {
          "id": "i1",
          "text": "circle"
        },
        {
          "id": "i2",
          "text": "ellipse"
        },
        {
          "id": "i3",
          "text": "polygon"
        },
        {
          "id": "i4",
          "text": "rect"
        },
        {
          "id": "i5",
          "text": "line"
        },
        {
          "id": "i6",
          "text": "path"
        },
        {
          "id": "i7",
          "text": "polyline"
        },
        {
          "id": "i8",
          "text": "x2=\"50\" y2=\"100\""
        },
        {
          "id": "i9",
          "text": "x2=\"350\" y2=\"100\""
        },
        {
          "id": "i10",
          "text": "x2=\"200\" y2=\"170\""
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Oval element with cx, cy, rx and ry",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Element using x1/y1/x2/y2",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "Element for the second diagonal",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Second diagonal endpoint",
          "correctItemId": "i9"
        }
      ]
    },
    {
      "id": "web-153",
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "A development team is following the Application Lifecycle Management process. They\nhave just finished writing the code for the web application.\n\nArrange the remaining stages in the correct chronological order to complete the cycle.\nCurrent Stage: Development\nNext Stage: \nFollowing Stage: \nFinal Stage:",
      "explanation": "After development, validate the application, deploy it and maintain it in operation. Real lifecycle work can be iterative.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Test"
        },
        {
          "id": "i2",
          "text": "Deploy"
        },
        {
          "id": "i3",
          "text": "Maintain"
        },
        {
          "id": "i4",
          "text": "Design"
        },
        {
          "id": "i5",
          "text": "Plan"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Next after development",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Following stage",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Ongoing final stage",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-154",
      "chapter": "html-forms",
      "type": "single",
      "question": "A developer wants to move an HTML element 50 pixels to the right and 20 pixels down\nfrom its original position using CSS. Which property and function combination achieves\nthis 2D transformation?",
      "explanation": "translate(x,y) moves the rendered element along horizontal and vertical axes without changing normal document flow.",
      "options": [
        "transform: translate(50px, 20px);",
        "position: move(50px, 20px);",
        "transform: skew(50px, 20px);",
        "transition: offset(50px, 20px);"
      ],
      "correct": 0
    },
    {
      "id": "web-155",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You are creating a CSS animation that continuously rotates a loading icon. Complete\nthe code to define the keyframes and apply the animation property.\n\n\n[1]\n spin {\nfrom { transform: rotate(0deg); }\nto { transform: rotate(360deg); }\n}\n.icon {\n\n[2]\n: spin 2s linear infinite;\n}",
      "explanation": "@keyframes defines the named animation; animation assigns its duration, timing and repetition to the element.",
      "dragItems": [
        {
          "id": "i1",
          "text": "@media"
        },
        {
          "id": "i2",
          "text": "@keyframes"
        },
        {
          "id": "i3",
          "text": "@animation"
        },
        {
          "id": "i4",
          "text": "@font-face"
        },
        {
          "id": "i5",
          "text": "animation"
        },
        {
          "id": "i6",
          "text": "transform"
        },
        {
          "id": "i7",
          "text": "transition"
        },
        {
          "id": "i8",
          "text": "filter"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-156",
      "chapter": "css-effects",
      "type": "drag_drop",
      "question": "A designer wants to apply specific visual filters to images on a gallery page. Match\nthe CSS filter function to the effect it produces.\n\nMakes the image appear in black and white: \nAdds a shadow behind the image contour: \nMakes the image partially transparent:",
      "explanation": "grayscale removes color, drop-shadow follows the alpha contour and opacity reduces visibility.",
      "dragItems": [
        {
          "id": "i1",
          "text": "grayscale(100%)"
        },
        {
          "id": "i2",
          "text": "drop-shadow(5px 5px 5px #000)"
        },
        {
          "id": "i3",
          "text": "opacity(50%)"
        },
        {
          "id": "i4",
          "text": "blur(5px)"
        },
        {
          "id": "i5",
          "text": "saturate(200%)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Makes the image appear in black and white:",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Adds a shadow behind the image contour:",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Makes the image partially transparent:",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-157",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Indicate whether each statement regarding Web Open Font Format (WOFF) and\ntypography is True or False.",
      "explanation": "WOFF is a compressed web-font format, font-family can list fallbacks and modern mobile browsers support web fonts.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "WOFF is a font format used in web pages that supports compression to reduce load times.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The CSS 'font-family' property allows you to specify a list of backup fonts in case the primary font fails to load.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "WOFF files can only be used on desktop browsers and are not supported on mobile devices.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "web-158",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "A developer is creating a vector graphic using the HTML5 SVG element. Complete the\ncode to draw a red circle with a radius of 40 pixels.",
      "explanation": "SVG circle uses cx/cy for its center and r for radius; radius is not the attribute name.",
      "dragItems": [
        {
          "id": "i1",
          "text": "line"
        },
        {
          "id": "i2",
          "text": "rect"
        },
        {
          "id": "i3",
          "text": "circle"
        },
        {
          "id": "i4",
          "text": "ellipse"
        },
        {
          "id": "i5",
          "text": "u"
        },
        {
          "id": "i6",
          "text": "r"
        },
        {
          "id": "i7",
          "text": "f"
        },
        {
          "id": "i8",
          "text": "b"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<svg>\n  <[1] cx=\"50\" cy=\"50\" [2]=\"40\" fill=\"red\" />\n</svg>"
    },
    {
      "id": "web-159",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "A developer needs to draw a straight red line using SVG. The line must start at coordinates (10, 10) and end at coordinates (50, 50).",
      "explanation": "SVG line endpoints use x1/y1 and x2/y2.",
      "dragItems": [
        {
          "id": "i1",
          "text": "y2"
        },
        {
          "id": "i2",
          "text": "x1"
        },
        {
          "id": "i3",
          "text": "y1"
        },
        {
          "id": "i4",
          "text": "x2"
        },
        {
          "id": "i5",
          "text": "y1"
        },
        {
          "id": "i6",
          "text": "x1"
        },
        {
          "id": "i7",
          "text": "x2"
        },
        {
          "id": "i8",
          "text": "y2"
        },
        {
          "id": "i9",
          "text": "x1"
        },
        {
          "id": "i10",
          "text": "y1"
        },
        {
          "id": "i11",
          "text": "y2"
        },
        {
          "id": "i12",
          "text": "x2"
        },
        {
          "id": "i13",
          "text": "y1"
        },
        {
          "id": "i14",
          "text": "x2"
        },
        {
          "id": "i15",
          "text": "y2"
        },
        {
          "id": "i16",
          "text": "x1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i15",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ],
      "code": "<svg>\n  <line [1]=\"10\" [2]=\"10\" [3]=\"50\" [4]=\"50\" stroke=\"red\" />\n</svg>"
    },
    {
      "id": "web-160",
      "chapter": "lifecycle",
      "type": "dropdown",
      "question": "A webpage requires a visual gauge to display the current disk usage, which is at 60%.\nSelect the appropriate HTML5 tag and attributes to represent this scalar measurement\nwithin a known range.\n\n<\n[1]\n min=\"0\" max=\"100\" \n[2]\n=\"60\">60%\n[3]\n>",
      "explanation": "meter represents a scalar within a known range, unlike progress for task completion.",
      "dragItems": [
        {
          "id": "i1",
          "text": "meter"
        },
        {
          "id": "i2",
          "text": "progress"
        },
        {
          "id": "i3",
          "text": "output"
        },
        {
          "id": "i4",
          "text": "input"
        },
        {
          "id": "i5",
          "text": "checked"
        },
        {
          "id": "i6",
          "text": "selected"
        },
        {
          "id": "i7",
          "text": "disabled"
        },
        {
          "id": "i8",
          "text": "value"
        },
        {
          "id": "i9",
          "text": "</input>"
        },
        {
          "id": "i10",
          "text": "</option>"
        },
        {
          "id": "i11",
          "text": "</meter"
        },
        {
          "id": "i12",
          "text": "<meter"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "web-161",
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "A developer wants to group related elements in a form (e.g., \"Shipping Address\") and\nprovide a caption for that group.\n\nMatch the HTML tags to their correct purpose.\n\nContainer for grouping related form data: \nCaption/Title for the grouped elements:",
      "explanation": "fieldset groups related controls and legend supplies its caption.",
      "dragItems": [
        {
          "id": "i1",
          "text": "fieldset"
        },
        {
          "id": "i2",
          "text": "legend"
        },
        {
          "id": "i3",
          "text": "group"
        },
        {
          "id": "i4",
          "text": "caption"
        },
        {
          "id": "i5",
          "text": "section"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Container for grouping related form data:",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Caption/Title for the grouped elements:",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "web-162",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You need to provide an input field where users can type their favorite fruit, but\nalso see a list of suggested options. Complete the markup to link the input field to the\npre-defined list.",
      "explanation": "The input's list attribute references a datalist id, allowing text entry with suggestions.",
      "dragItems": [
        {
          "id": "i1",
          "text": "id"
        },
        {
          "id": "i2",
          "text": "for"
        },
        {
          "id": "i3",
          "text": "list"
        },
        {
          "id": "i4",
          "text": "name"
        },
        {
          "id": "i5",
          "text": "option"
        },
        {
          "id": "i6",
          "text": "datalist"
        },
        {
          "id": "i7",
          "text": "select"
        },
        {
          "id": "i8",
          "text": "optgroup"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<input [1]=\"fruitList\" name=\"fruit\" />\n<[2] id=\"fruitList\">\n  <option value=\"Apple\">\n  <option value=\"Pear\">\n</datalist>"
    },
    {
      "id": "web-163",
      "chapter": "html-forms",
      "type": "single",
      "question": "A developer needs to validate a form field to ensure the user enters a product code\nconsisting of exactly 3 uppercase letters followed by 4 digits (e.g., ABC1234). Which\nattribute and value should be applied to the input element?",
      "explanation": "[A-Z]{3}[0-9]{4} requires three ASCII uppercase letters followed by four digits. HTML pattern validation matches the whole value.",
      "options": [
        "pattern=\"[A-Z]{3}[0-9]{4}\"",
        "pattern=\"[A-Z]{3}-[0-9]{4}\"",
        "validate=\"uppercase-digits\"",
        "type=\"text-code\""
      ],
      "correct": 0
    },
    {
      "id": "web-164",
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "Match the input attribute to the validation behavior it enforces.\n\nEnsures the field is not left empty before submission: \nSpecifies the minimum and maximum numeric values allowed: \nChecks if the entered text matches an email format:",
      "explanation": "required prevents an empty required control, min/max bound numeric values and email applies basic email-format validation.",
      "dragItems": [
        {
          "id": "i1",
          "text": "required"
        },
        {
          "id": "i2",
          "text": "min/max"
        },
        {
          "id": "i3",
          "text": "type=\"email\""
        },
        {
          "id": "i4",
          "text": "pattern"
        },
        {
          "id": "i5",
          "text": "step"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Prevent empty submission",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Numeric lower and upper bounds",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Check email-like format",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-165",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You are creating a calculator that sums two numbers and displays the result\nimmediately without reloading the page. Complete the markup using the semantic output\nelement.\n\n<form' oninput=\"result.value=parseInt(a.value)+parseInt(b.value)\">\n<input' type=\"number\" id=\"a\" value=\"0\"> +\n<input' type=\"number\" id=\"b\" value=\"0\"> =\n<\n[1]\n name=\"result\" \n[2]\n=\"a b\">0\n[3]\n>",
      "explanation": "output semantically displays a calculation result; its for attribute lists contributing control IDs.",
      "dragItems": [
        {
          "id": "i1",
          "text": "meter"
        },
        {
          "id": "i2",
          "text": "progress"
        },
        {
          "id": "i3",
          "text": "input"
        },
        {
          "id": "i4",
          "text": "output"
        },
        {
          "id": "i5",
          "text": "name"
        },
        {
          "id": "i6",
          "text": "id"
        },
        {
          "id": "i7",
          "text": "for"
        },
        {
          "id": "i8",
          "text": "list"
        },
        {
          "id": "i9",
          "text": "</option>"
        },
        {
          "id": "i10",
          "text": "</output"
        },
        {
          "id": "i11",
          "text": "<output"
        },
        {
          "id": "i12",
          "text": "</input>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "web-166",
      "chapter": "css-layout",
      "type": "single",
      "question": "In CSS positioning, what happens when an element is assigned position: absolute;?",
      "explanation": "Absolute positioning removes the element from normal flow and uses its containing block, often the nearest positioned ancestor.",
      "options": [
        "It is removed from the normal document flow and positioned relative to its nearest positioned ancestor.",
        "It remains in the normal flow but is shifted relative to its original position.",
        "It is always positioned relative to the browser viewport, regardless of scrolling.",
        "It floats to the left or right of its container text."
      ],
      "correct": 0
    },
    {
      "id": "web-167",
      "chapter": "css-layout",
      "type": "drag_drop",
      "question": "A developer has a fixed-size container (div) consisting of a lot of text. Determine\nthe CSS overflow property value needed for the following behaviors.\n\nThe text is clipped and the rest is invisible: \nScrollbars appear to allow the user to see the rest of the content: \nThe content renders outside the box, overlapping other elements:",
      "explanation": "hidden clips overflow, scroll supplies scrolling and visible paints outside the box. auto adds scrolling only when needed.",
      "dragItems": [
        {
          "id": "i1",
          "text": "hidden"
        },
        {
          "id": "i2",
          "text": "scroll"
        },
        {
          "id": "i3",
          "text": "visible"
        },
        {
          "id": "i4",
          "text": "auto"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The text is clipped and the rest is invisible:",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Scrollbars appear to allow the user to see the rest of the content:",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "The content renders outside the box, overlapping other elements:",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-168",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Assume ordinary normal block/inline formatting with default widths, not flex/grid/absolute layout. Evaluate each statement.",
      "explanation": "In ordinary block/inline flow, blocks begin new lines and inline content shares lines. Inline-block also accepts dimensions; flex/grid formatting can change the surrounding layout behavior.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Block-level elements (like <div'> and <p'>) always start on a new line and take up the full width available.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Inline elements (like <span'> and <a'>) allow other elements to sit next to them on the same line.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Changing an element's display property to display: inline-block allows it to sit on the same line as other elements while respecting width and height settings.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "web-169",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "A developer wants to apply specific styles only when the device screen is 600 pixels\nwide or less. Complete the CSS media query syntax to achieve this.",
      "explanation": "The screen media type and max-width:600px condition apply styles at viewport widths up to 600px.",
      "dragItems": [
        {
          "id": "i1",
          "text": "print"
        },
        {
          "id": "i2",
          "text": "speech"
        },
        {
          "id": "i3",
          "text": "all"
        },
        {
          "id": "i4",
          "text": "screen"
        },
        {
          "id": "i5",
          "text": "width"
        },
        {
          "id": "i6",
          "text": "device-height"
        },
        {
          "id": "i7",
          "text": "max-width"
        },
        {
          "id": "i8",
          "text": "min-width"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "@media only [1] and ([2]: 600px) {\n  body { background-color: lightblue; }\n}"
    },
    {
      "id": "web-170",
      "chapter": "javascript",
      "type": "single",
      "question": "You have a flex container with the class .container. You want to center its child\nitems both vertically and horizontally within the container. Which combination of\nproperties should you use?",
      "explanation": "justify-content centers on the main axis and align-items centers on the cross axis, assuming enough container space.",
      "options": [
        "justify-content: center; align-items: center;",
        "justify-content: space-between; align-content: center;",
        "text-align: center; vertical-align: middle;",
        "flex-direction: column; align-self: center;"
      ],
      "correct": 0
    },
    {
      "id": "web-171",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "A developer is building a grid layout with three columns. The first column should be\n100px wide, the second should take up 2 fractions of the remaining space, and the third\nshould take up 1 fraction.\n\nComplete the CSS code:\n\n.grid-container {\ndisplay: grid;\ngrid-template-columns: \n[1]\n \n[2]\n \n[3]\n;\n}",
      "explanation": "The first track is fixed; the remaining available space is divided in a 2:1 ratio.",
      "dragItems": [
        {
          "id": "i1",
          "text": "auto"
        },
        {
          "id": "i2",
          "text": "100px"
        },
        {
          "id": "i3",
          "text": "1fr"
        },
        {
          "id": "i4",
          "text": "2fr"
        },
        {
          "id": "i5",
          "text": "2fr"
        },
        {
          "id": "i6",
          "text": "100px"
        },
        {
          "id": "i7",
          "text": "1fr"
        },
        {
          "id": "i8",
          "text": "auto"
        },
        {
          "id": "i9",
          "text": "100px"
        },
        {
          "id": "i10",
          "text": "2fr"
        },
        {
          "id": "i11",
          "text": "auto"
        },
        {
          "id": "i12",
          "text": "1fr"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "web-172",
      "chapter": "graphics",
      "type": "single",
      "question": "Which HTML meta tag must be included in the <head'> section to ensure a web page\nscales correctly on mobile devices?",
      "explanation": "The viewport meta tag uses device width and initial-scale to support responsive sizing on mobile browsers.",
      "options": [
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "<meta name=\"responsive\" content=\"true\">",
        "<meta name=\"screen\" content=\"width=mobile, scale=auto\">",
        "<meta charset=\"viewport-scale\">"
      ],
      "correct": 0
    },
    {
      "id": "web-173",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "You are styling items inside a flex container. - Item A should grow to fill available\nspace twice as fast as other items. - Item B should not shrink even if there is not\nenough space.\n\nComplete the CSS for the items:\n\n.item-a {\n\n[1]\n: 2;\n}\n.item-b {\n\n[2]\n: 0;\n}",
      "explanation": "flex-grow controls allocation of positive free space; flex-shrink:0 prevents shrinking under negative free space.",
      "dragItems": [
        {
          "id": "i1",
          "text": "flex-shrink"
        },
        {
          "id": "i2",
          "text": "order"
        },
        {
          "id": "i3",
          "text": "flex-basis"
        },
        {
          "id": "i4",
          "text": "flex-grow"
        },
        {
          "id": "i5",
          "text": "order"
        },
        {
          "id": "i6",
          "text": "flex-basis"
        },
        {
          "id": "i7",
          "text": "flex-shrink"
        },
        {
          "id": "i8",
          "text": "flex-grow"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-174",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "Select NUMERIC start/end grid-line numbers to span the first two columns.",
      "explanation": "Grid lines 1 through 3 enclose two columns. Using span 2 as the end would also work; the question asks for numeric lines.",
      "dragItems": [
        {
          "id": "i1",
          "text": "2"
        },
        {
          "id": "i2",
          "text": "3"
        },
        {
          "id": "i3",
          "text": "1"
        },
        {
          "id": "i4",
          "text": "0"
        },
        {
          "id": "i5",
          "text": "2"
        },
        {
          "id": "i6",
          "text": "3"
        },
        {
          "id": "i7",
          "text": "0"
        },
        {
          "id": "i8",
          "text": "1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": ".item {\n  grid-column-start: [1];\n  grid-column-end: [2];\n}"
    },
    {
      "id": "web-175",
      "chapter": "graphics",
      "type": "single",
      "question": "Which CSS longhand property specifically controls whether flex items wrap to multiple lines?",
      "explanation": "flex-wrap directly controls wrapping. flex-flow is a shorthand that can also set it, but is not the longhand requested.",
      "options": [
        "flex-wrap",
        "flex-direction",
        "flex-flow",
        "align-content"
      ],
      "correct": 0
    },
    {
      "id": "web-176",
      "chapter": "css-layout",
      "type": "drag_drop",
      "question": "A developer is using the CSS background-size property. Match the value to its\nbehavior.\n\nScales the image to the largest size such that both its width and height can fit inside\nthe content area: \nScales the background image to be as large as possible so that the background area is\ncompletely covered:",
      "explanation": "contain preserves the whole image within the area; cover fills the area and may crop.",
      "dragItems": [
        {
          "id": "i1",
          "text": "contain"
        },
        {
          "id": "i2",
          "text": "cover"
        },
        {
          "id": "i3",
          "text": "auto"
        },
        {
          "id": "i4",
          "text": "100%"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Fit the whole image inside the background area without cropping.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Cover the entire background area while preserving aspect ratio, allowing cropping.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "web-177",
      "chapter": "html-forms",
      "type": "single",
      "question": "Which 2D transformation function skews an element along the X and Y axes?",
      "explanation": "skew applies angular shear along the two axes; rotate, scale and translate perform different transforms.",
      "options": [
        "skew(x-angle, y-angle)",
        "rotate(angle)",
        "scale(x, y)",
        "translate(x, y)"
      ],
      "correct": 0
    },
    {
      "id": "web-178",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You need to group a set of radio buttons in a form and provide a caption for that\ngroup. Complete the HTML structure.\n\n<\n[1]\n>\n<\n[2]\n>Choose your shipping method:\n[3]\n>\n<input' type=\"radio\" name=\"shipping\" value=\"standard\"> Standard\n<input' type=\"radio\" name=\"shipping\" value=\"express\"> Express\n\n[4]\n>",
      "explanation": "fieldset groups the radio controls and legend supplies the caption. Matching closing tags keep the markup valid.",
      "dragItems": [
        {
          "id": "i1",
          "text": "label"
        },
        {
          "id": "i2",
          "text": "fieldset"
        },
        {
          "id": "i3",
          "text": "legend"
        },
        {
          "id": "i4",
          "text": "form"
        },
        {
          "id": "i5",
          "text": "legend"
        },
        {
          "id": "i6",
          "text": "fieldset"
        },
        {
          "id": "i7",
          "text": "form"
        },
        {
          "id": "i8",
          "text": "label"
        },
        {
          "id": "i9",
          "text": "<legend"
        },
        {
          "id": "i10",
          "text": "</input>"
        },
        {
          "id": "i11",
          "text": "</option>"
        },
        {
          "id": "i12",
          "text": "</legend"
        },
        {
          "id": "i13",
          "text": "</input>"
        },
        {
          "id": "i14",
          "text": "</option>"
        },
        {
          "id": "i15",
          "text": "</fieldset"
        },
        {
          "id": "i16",
          "text": "<fieldset"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i15",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "web-179",
      "chapter": "css-layout",
      "type": "drag_drop",
      "question": "A developer is using CSS Grid. Match the property to its function.\n\nDefines the size of the gap between rows and columns: \nSpecifies the size of the columns in a grid container:",
      "explanation": "gap sizes gutters; grid-template-columns defines explicit column track sizes.",
      "dragItems": [
        {
          "id": "i1",
          "text": "gap"
        },
        {
          "id": "i2",
          "text": "grid-template-columns"
        },
        {
          "id": "i3",
          "text": "grid-auto-flow"
        },
        {
          "id": "i4",
          "text": "grid-template-areas"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Defines the size of the gap between rows and columns:",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Specifies the size of the columns in a grid container:",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "web-180",
      "chapter": "html-forms",
      "type": "single",
      "question": "Which HTML5 element allows you to specify multiple image resources for different\ndisplay scenarios (e.g., different screen widths or formats), allowing the browser to\nchoose the most appropriate one?",
      "explanation": "picture provides source alternatives and an img fallback for responsive images or format selection.",
      "options": [
        "<picture'>",
        "<canvas'>",
        "<img-set'>",
        "<figure'>"
      ],
      "correct": 0
    },
    {
      "id": "web-181",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "For the first statement assume no transformed/filter ancestor establishes a different fixed-position containing block. Evaluate each statement.",
      "explanation": "Ordinary fixed elements stay relative to the viewport. Floats influence surrounding text, and z-index also applies to flex/grid items without positioned layout.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Elements with position: fixed are positioned relative to the viewport and do not move when the page is scrolled.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Elements with float: left remain in the normal document flow and do not affect surrounding text.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The z-index property only works on positioned elements (relative, absolute, fixed, sticky).",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "web-182",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "A developer wants to modify the order of flex items visually without changing the\nHTML structure. Assign the correct CSS property to change the order.",
      "explanation": "The order property changes visual flex ordering without changing DOM or keyboard navigation order.",
      "dragItems": [
        {
          "id": "i1",
          "text": "flex-basis"
        },
        {
          "id": "i2",
          "text": "order"
        },
        {
          "id": "i3",
          "text": "flex-grow"
        },
        {
          "id": "i4",
          "text": "flex-shrink"
        },
        {
          "id": "i5",
          "text": "order"
        },
        {
          "id": "i6",
          "text": "flex-grow"
        },
        {
          "id": "i7",
          "text": "flex-shrink"
        },
        {
          "id": "i8",
          "text": "flex-basis"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": ".item-1 { [1]: 2; }\n.item-2 { [2]: 1; }"
    },
    {
      "id": "web-183",
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "You want to apply a Sepia filter to an image using CSS. Complete the code.\n\nimg {\n\n[1]\n: \n[2]\n(100%);\n}",
      "explanation": "filter:sepia(100%) applies a full sepia color treatment.",
      "dragItems": [
        {
          "id": "i1",
          "text": "filter"
        },
        {
          "id": "i2",
          "text": "transform"
        },
        {
          "id": "i3",
          "text": "transition"
        },
        {
          "id": "i4",
          "text": "animation"
        },
        {
          "id": "i5",
          "text": "blur"
        },
        {
          "id": "i6",
          "text": "grayscale"
        },
        {
          "id": "i7",
          "text": "brightness"
        },
        {
          "id": "i8",
          "text": "sepia"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-184",
      "chapter": "lifecycle",
      "type": "single",
      "question": "During which stage of the Application Lifecycle Management (ALM) does the team define\nthe visual layout, color scheme, and user interface of the application?",
      "explanation": "Design specifies the intended interface/layout before implementation, while testing validates and deployment releases it.",
      "options": [
        "Design",
        "Develop",
        "Test",
        "Deploy"
      ],
      "correct": 0
    },
    {
      "id": "web-185",
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "Match the SVG concept to its description.\n\nSVG code written directly within the HTML document: \nSVG code stored in a separate file and linked via an  tag:",
      "explanation": "Inline SVG is markup in the document. External SVG can be referenced through img/object or other supported embedding methods.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Inline SVG"
        },
        {
          "id": "i2",
          "text": "Referenced SVG"
        },
        {
          "id": "i3",
          "text": "Canvas API"
        },
        {
          "id": "i4",
          "text": "Raster Image"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "SVG markup embedded directly in the HTML document.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "An external SVG file referenced through an img element.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "web-186",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "A developer wants to provide visual feedback on a form. If an input field contains\nvalid data, it should have a green border. If it contains invalid data, it should have a\nred border.",
      "explanation": ":invalid and :valid reflect built-in constraint validation and can style the control accordingly.",
      "dragItems": [
        {
          "id": "i1",
          "text": "checked"
        },
        {
          "id": "i2",
          "text": "invalid"
        },
        {
          "id": "i3",
          "text": "valid"
        },
        {
          "id": "i4",
          "text": "disabled"
        },
        {
          "id": "i5",
          "text": "valid"
        },
        {
          "id": "i6",
          "text": "invalid"
        },
        {
          "id": "i7",
          "text": "disabled"
        },
        {
          "id": "i8",
          "text": "checked"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "input:[1] { border: 2px solid red; }\ninput:[2] { border: 2px solid green; }"
    },
    {
      "id": "web-187",
      "chapter": "html-forms",
      "type": "single",
      "question": "You want to create a smooth visual effect where a button changes its background color\nover 0.5 seconds when a user hovers over it. Which CSS property is used to define the\nspeed curve and duration of this change?",
      "explanation": "transition defines interpolation duration/timing for property changes such as a hover background color.",
      "options": [
        "transition",
        "animation",
        "transform",
        "keyframes"
      ],
      "correct": 0
    },
    {
      "id": "web-188",
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "In a Flexbox container set to flex-direction: row, you want to align the items\nvertically (along the cross-axis).\n\nMatch the alignment goal with the correct property value for `align-items`.\n\nStretch items to fill the container height: \nAlign items to the top of the container: \nAlign items to the center of the container:",
      "explanation": "For a normal row flex container, the cross axis is vertical; align-items controls those cross-axis positions.",
      "dragItems": [
        {
          "id": "i1",
          "text": "stretch"
        },
        {
          "id": "i2",
          "text": "flex-start"
        },
        {
          "id": "i3",
          "text": "center"
        },
        {
          "id": "i4",
          "text": "space-between"
        },
        {
          "id": "i5",
          "text": "baseline"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Stretch items to fill the container height:",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Align items to the top of the container:",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Align items to the center of the container:",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-189",
      "chapter": "css-effects",
      "type": "single",
      "question": "A designer wants to create a background that smoothly changes from blue at the top to\ngreen at the bottom. Which CSS function should be used to achieve this effect?",
      "explanation": "linear-gradient(to bottom, blue, green) creates the requested directional color blend.",
      "options": [
        "linear-gradient()",
        "radial-gradient()",
        "color-transition()",
        "background-blend()"
      ],
      "correct": 0
    },
    {
      "id": "web-190",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "A developer is using CSS Grid to place a header element into a named grid area.\nComplete the CSS code.\n\n.header {\n\n[1]\n: myHeaderArea;\n}\n.container {\ndisplay: grid;\n\n[2]\n: \"myHeaderArea myHeaderArea\" \"sidebar content\";\n}",
      "explanation": "grid-area assigns the named placement; grid-template-areas defines the container's named layout.",
      "dragItems": [
        {
          "id": "i1",
          "text": "grid-auto-flow"
        },
        {
          "id": "i2",
          "text": "grid-area"
        },
        {
          "id": "i3",
          "text": "grid-template-areas"
        },
        {
          "id": "i4",
          "text": "grid-template-columns"
        },
        {
          "id": "i5",
          "text": "grid-template-areas"
        },
        {
          "id": "i6",
          "text": "grid-area"
        },
        {
          "id": "i7",
          "text": "grid-template-columns"
        },
        {
          "id": "i8",
          "text": "grid-auto-flow"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-191",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Indicate whether the following statements regarding CSS 3D Transformations are True\nor False.",
      "explanation": "perspective controls apparent viewing distance, rotateZ rotates in the screen plane and translateZ moves along depth.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The perspective property defines how far the object is away from the user, affecting the intensity of the 3D effect.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The rotateZ() function rotates an element around the horizontal axis (like a gymnast on a bar).",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The translateZ() function moves an element closer to or further away from the viewer (Z-axis).",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "web-192",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Complete this required website URL input.",
      "explanation": "The url input type validates a nonempty URL-shaped value; required also prevents empty submission under normal constraint validation.",
      "dragItems": [
        {
          "id": "i1",
          "text": "email"
        },
        {
          "id": "i2",
          "text": "password"
        },
        {
          "id": "i3",
          "text": "url"
        },
        {
          "id": "i4",
          "text": "text"
        },
        {
          "id": "i5",
          "text": "multiple"
        },
        {
          "id": "i6",
          "text": "required"
        },
        {
          "id": "i7",
          "text": "readonly"
        },
        {
          "id": "i8",
          "text": "disabled"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<label for=\"site\">Website:</label>\n<input type=\"[1]\" id=\"site\" name=\"website\" [2]>"
    },
    {
      "id": "web-193",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "You want to change the background color of the page to blue using JavaScript.\n\ndocument.\n[1]\n.style.\n[2]\n = 'blue';",
      "explanation": "document.body selects the body element, and backgroundColor is the JavaScript style-property spelling of background-color.",
      "dragItems": [
        {
          "id": "i1",
          "text": "forms"
        },
        {
          "id": "i2",
          "text": "body"
        },
        {
          "id": "i3",
          "text": "head"
        },
        {
          "id": "i4",
          "text": "documentElement"
        },
        {
          "id": "i5",
          "text": "backgroundColor"
        },
        {
          "id": "i6",
          "text": "color"
        },
        {
          "id": "i7",
          "text": "backgroundImage"
        },
        {
          "id": "i8",
          "text": "borderColor"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-194",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "Complete the switch statement to check the variable \"day\".\n\nswitch (day) {\n\n[1]\n 1:\ntext = \"Monday\";\n\n[2]\n;\ndefault:\ntext = \"Unknown\";\n}",
      "explanation": "case introduces a switch branch and break prevents execution from falling through to the next branch.",
      "dragItems": [
        {
          "id": "i1",
          "text": "case"
        },
        {
          "id": "i2",
          "text": "default"
        },
        {
          "id": "i3",
          "text": "if"
        },
        {
          "id": "i4",
          "text": "switch"
        },
        {
          "id": "i5",
          "text": "raise"
        },
        {
          "id": "i6",
          "text": "return"
        },
        {
          "id": "i7",
          "text": "pass"
        },
        {
          "id": "i8",
          "text": "break"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-195",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Complete both tag names to create a list of suggestions while still allowing free-text input.",
      "explanation": "A datalist supplies suggestions to an input linked by its list attribute while permitting other text.",
      "dragItems": [
        {
          "id": "i1",
          "text": "select"
        },
        {
          "id": "i2",
          "text": "optgroup"
        },
        {
          "id": "i3",
          "text": "option"
        },
        {
          "id": "i4",
          "text": "datalist"
        },
        {
          "id": "i5",
          "text": "optgroup"
        },
        {
          "id": "i6",
          "text": "option"
        },
        {
          "id": "i7",
          "text": "datalist"
        },
        {
          "id": "i8",
          "text": "select"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<input list=\"fruits\">\n<[1] id=\"fruits\">\n  <option value=\"Apple\">\n  <option value=\"Banana\">\n</[2]>"
    },
    {
      "id": "web-196",
      "chapter": "graphics",
      "type": "multiple",
      "question": "You are reviewing CSS code for a photo gallery. You need to identify which lines correctly apply a visual filter to an image element.\n\nWhich two CSS rules contain valid syntax for the `filter` property? (Choose 2)",
      "explanation": "grayscale accepts a percentage, and drop-shadow accepts offsets, optional blur radius, and color. blur needs a length, and box-shadow is a separate property rather than a filter function.",
      "options": [
        "filter: blur(50%);",
        "filter: grayscale(100%);",
        "filter: drop-shadow(5px 5px 10px gray);",
        "filter: box-shadow(5px 5px 10px gray);"
      ],
      "correct": [
        1,
        2
      ]
    },
    {
      "id": "web-197",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You are creating a form for inventory management. The \"Product ID\" field must accept exactly 2 uppercase letters followed by a hyphen and 4 digits (e.g., \"XY-1234\"). Complete the input definition.\n\ninput type=\"text\" \n[1]\n=\"[A-Z]{2}\n[2]\n\\d{4}\" title=\"Format: XX-0000\"",
      "explanation": "The pattern attribute requires two uppercase letters, a literal hyphen, and four digits for a nonempty value.",
      "dragItems": [
        {
          "id": "i1",
          "text": "placeholder"
        },
        {
          "id": "i2",
          "text": "pattern"
        },
        {
          "id": "i3",
          "text": "minlength"
        },
        {
          "id": "i4",
          "text": "maxlength"
        },
        {
          "id": "i5",
          "text": "-"
        },
        {
          "id": "i6",
          "text": "+"
        },
        {
          "id": "i7",
          "text": "*"
        },
        {
          "id": "i8",
          "text": "/"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-198",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "A developer is constructing a 3D cube icon using SVG. The code snippet below represents the top circular detail and the diagonal lines crossing the faces.\n\nUsing the coordinate system shown in the image, complete the markup by selecting the correct tag names and attribute values.\n\n<svg height=\"500\" width=\"500\">\n<polygon points=\"200,45 350,100 200,170 50,100\" ... />\n<polygon points=\"200,170 50,100 50,275 200,365\" ... />\n<polygon points=\"350,100 350,275 200,365 200,170\" ... />\n\n< \n[1]\n cx=\"200\" cy=\"100\" rx=\"20\" ry=\"10\" style=\"fill:white\" />\n\n< \n[2]\n x1=\"200\" y1=\"365\" x2=\"50\" y2=\"100\" style=\"stroke:white; stroke-width:8\" />\n\n< \n[3]\n x1=\"200\" y1=\"365\" \n[4]\n style=\"stroke:white; stroke-width:8\" />",
      "explanation": "An ellipse uses cx, cy, rx, and ry. Each line uses two endpoints; the right diagonal ends at (350,100).",
      "dragItems": [
        {
          "id": "i1",
          "text": "ellipse"
        },
        {
          "id": "i2",
          "text": "circle"
        },
        {
          "id": "i3",
          "text": "line"
        },
        {
          "id": "i4",
          "text": "rect"
        },
        {
          "id": "i5",
          "text": "circle"
        },
        {
          "id": "i6",
          "text": "ellipse"
        },
        {
          "id": "i7",
          "text": "rect"
        },
        {
          "id": "i8",
          "text": "line"
        },
        {
          "id": "i9",
          "text": "ellipse"
        },
        {
          "id": "i10",
          "text": "rect"
        },
        {
          "id": "i11",
          "text": "line"
        },
        {
          "id": "i12",
          "text": "circle"
        },
        {
          "id": "i13",
          "text": "x2=\"350\" y2=\"100\""
        },
        {
          "id": "i14",
          "text": "ellipse"
        },
        {
          "id": "i15",
          "text": "line"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i13",
          "optionIds": [
            "i13",
            "i14",
            "i15"
          ]
        }
      ],
      "image": "assets/html5/pdf-073-svg-cube.png"
    },
    {
      "id": "web-199",
      "chapter": "html-forms",
      "type": "single",
      "question": "Review the following input definition:\n<input type=\"text\" pattern=\"User\\d{3}\">\n\nWhich of the following values will be accepted by this field?",
      "explanation": "HTML pattern validation matches the entire nonempty value. User123 has the required capitalization and exactly three digits.",
      "options": [
        "User12",
        "user123",
        "User123",
        "User1234"
      ],
      "correct": 2
    },
    {
      "id": "web-200",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "You need to apply a specific style only for devices with a screen width between 600px and 900px. Complete the media query.\n\n@media screen and (min-width: 600px) \n[1]\n (max-width: 900px) { ... }",
      "explanation": "The and operator combines the minimum and maximum viewport-width conditions.",
      "dragItems": [
        {
          "id": "i1",
          "text": "or"
        },
        {
          "id": "i2",
          "text": "not"
        },
        {
          "id": "i3",
          "text": "and"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        }
      ]
    },
    {
      "id": "web-201",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "For each statement regarding HTML5 form attributes, indicate Yes if the statement is true and No if the statement is false.",
      "explanation": "required rejects an empty applicable input, readonly prevents user editing, and value specifies an initial value for a text input.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The 'required' attribute prevents a form from being submitted if the input field is empty.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The 'readonly' attribute allows the user to edit the value, but validation is ignored.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The 'value' attribute specifies the initial text displayed inside an input field.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "web-202",
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "A front-end developer is configuring the \"User Profile\" form. Match the correct HTML5 attribute to the specific requirement described below.\n\n1. The \"Username\" field must strictly match a specific format (only letters and numbers, no symbols).\nAttribute: \n\n2. The \"Bio\" field should show a light gray text hint (\"Tell us about yourself...\") that vanishes when the user clicks inside.\nAttribute: \n\n3. The \"Email\" field must not be left empty; the form cannot be submitted without it.\nAttribute: \n\n4. The \"Portfolio Upload\" field should allow the user to select and upload five images at the same time.\nAttribute:",
      "explanation": "pattern constrains format, placeholder supplies a hint, required forbids an empty value, and multiple permits selecting several files without enforcing an exact count of five.",
      "dragItems": [
        {
          "id": "i1",
          "text": "maxlength"
        },
        {
          "id": "i2",
          "text": "multiple"
        },
        {
          "id": "i3",
          "text": "pattern"
        },
        {
          "id": "i4",
          "text": "placeholder"
        },
        {
          "id": "i5",
          "text": "required"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Require a specified alphanumeric format.",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Display a hint while the control is empty.",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Require a nonempty email value.",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Allow several images to be selected in one file-selection action.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "web-203",
      "chapter": "css-layout",
      "type": "single",
      "question": "You have three floated div elements with width: 33.3%. You add a border to them, and they no longer fit on one line, breaking the layout. Which CSS property fixes this by including the border and padding in the element's total width and height?",
      "explanation": "border-box includes padding and borders inside the declared width, avoiding the extra width produced by content-box sizing.",
      "options": [
        "overflow: hidden;",
        "display: inline-block;",
        "box-sizing: border-box;",
        "position: relative;"
      ],
      "correct": 2
    },
    {
      "id": "web-204",
      "chapter": "lifecycle",
      "type": "dropdown",
      "question": "Complete the structure to check if the time is less than 12, otherwise if it is less than 18.",
      "explanation": "else if checks a second condition only after the first fails, and else handles the remaining cases.",
      "dragItems": [
        {
          "id": "i1",
          "text": "elif"
        },
        {
          "id": "i2",
          "text": "then"
        },
        {
          "id": "i3",
          "text": "else if"
        },
        {
          "id": "i4",
          "text": "if else"
        },
        {
          "id": "i5",
          "text": "finally"
        },
        {
          "id": "i6",
          "text": "else"
        },
        {
          "id": "i7",
          "text": "try"
        },
        {
          "id": "i8",
          "text": "except"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "if (time < 12) { /* morning */ }\n[1] (time < 18) { /* afternoon */ }\n[2] { /* evening */ }"
    },
    {
      "id": "web-205",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "You want to check if a checkbox is checked or not to display a message.\n\nlet isChecked = document.getElementById(\"accept\").\n[1]\n;\nconsole.log(isChecked);",
      "explanation": "A checkbox's checked property is a Boolean describing its current checked state.",
      "dragItems": [
        {
          "id": "i1",
          "text": "disabled"
        },
        {
          "id": "i2",
          "text": "checked"
        },
        {
          "id": "i3",
          "text": "invalid"
        },
        {
          "id": "i4",
          "text": "valid"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "web-206",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You need to group related elements in a long registration form to make it more accessible and easier to read. You also want to add a caption to this group.",
      "explanation": "fieldset groups related controls and legend gives the group an accessible caption.",
      "dragItems": [
        {
          "id": "i1",
          "text": "<fieldset>"
        },
        {
          "id": "i2",
          "text": "<legend>"
        },
        {
          "id": "i3",
          "text": "</legend>"
        },
        {
          "id": "i4",
          "text": "</fieldset>"
        },
        {
          "id": "i5",
          "text": "<fieldset>"
        },
        {
          "id": "i6",
          "text": "</legend>"
        },
        {
          "id": "i7",
          "text": "</fieldset>"
        },
        {
          "id": "i8",
          "text": "<legend>"
        },
        {
          "id": "i9",
          "text": "<legend>"
        },
        {
          "id": "i10",
          "text": "</fieldset>"
        },
        {
          "id": "i11",
          "text": "</legend>"
        },
        {
          "id": "i12",
          "text": "<fieldset>"
        },
        {
          "id": "i13",
          "text": "</legend>"
        },
        {
          "id": "i14",
          "text": "</fieldset>"
        },
        {
          "id": "i15",
          "text": "<fieldset>"
        },
        {
          "id": "i16",
          "text": "<legend>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i14",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ],
      "code": "[1]\n  [2]User Details[3]\n  <input type=\"text\" name=\"fname\">\n  <input type=\"text\" name=\"lname\">\n[4]"
    },
    {
      "id": "web-207",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "A developer is building a \"Shipping Address\" form and wants to provide a suggestion list of common countries for the user to choose from, while still allowing them to type a new value if needed.",
      "explanation": "The input's list value must match the id of the datalist that supplies its suggestions.",
      "dragItems": [
        {
          "id": "i1",
          "text": "select"
        },
        {
          "id": "i2",
          "text": "optgroup"
        },
        {
          "id": "i3",
          "text": "option"
        },
        {
          "id": "i4",
          "text": "datalist"
        },
        {
          "id": "i5",
          "text": "countries"
        },
        {
          "id": "i6",
          "text": "country-input"
        },
        {
          "id": "i7",
          "text": "country-list"
        },
        {
          "id": "i8",
          "text": "country"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<label for=\"country\">Choose a country:</label>\n<input list=\"country-list\" id=\"country\" name=\"country\">\n<[1] id=\"[2]\">\n  <option value=\"Canada\">\n  <option value=\"France\">\n</datalist>"
    },
    {
      "id": "web-208",
      "chapter": "html-forms",
      "type": "single",
      "question": "You are implementing a field requiring a date in the format DD/MM/YYYY. Which pattern attribute correctly validates this input?",
      "explanation": "This expression checks two digits, slash, two digits, slash, four digits. It checks shape only, not whether a calendar date actually exists.",
      "options": [
        "pattern=\"\\d{2}/\\d{2}/\\d{4}\"",
        "pattern=\"[0-9]{2}-[0-9]{2}-[0-9]{4}\"",
        "pattern=\"\\d{2,4}/\\d{2,4}/\\d{2,4}\"",
        "pattern=\"DD/MM/YYYY\""
      ],
      "correct": 0
    },
    {
      "id": "web-209",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "For the array: const colors = [\"red\", \"green\"];\nIndicate if the statements about loops are True (Yes) or False (No).",
      "explanation": "for...of yields array values, for...in yields enumerable property keys such as \"0\" and \"1\", and arrays support several iteration mechanisms.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The loop 'for (let x of colors)' will iterate over the values \"red\" and \"green\".",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The loop 'for (let x in colors)' will iterate over the indexes 0 and 1.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Loops cannot be used to iterate through an array.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "web-210",
      "chapter": "graphics",
      "type": "single",
      "question": "You are using a flex container with 'flex-direction: row'. You want to align the items vertically in the center of the container (along the cross axis). Which property should you use?",
      "explanation": "For a row-direction flex container, align-items centers items on the cross axis. align-content distributes multiple flex lines instead.",
      "options": [
        "justify-content: center",
        "align-items: center",
        "text-align: center",
        "align-content: center"
      ],
      "correct": 1
    },
    {
      "id": "web-211",
      "chapter": "html-forms",
      "type": "single",
      "question": "You are designing a feedback form where users rate a service on a scale from 1 to 10. You want to use a slider control for this input. Which input type should you use?",
      "explanation": "The range input presents a slider; min and max can constrain it to 1 through 10.",
      "options": [
        "type=\"number\"",
        "type=\"range\"",
        "type=\"slider\"",
        "type=\"scale\""
      ],
      "correct": 1
    },
    {
      "id": "web-212",
      "chapter": "html-forms",
      "type": "multiple",
      "question": "The development team has just delivered a build of a new web application. You are currently in the Testing phase of the application lifecycle.\n\nWhich THREE activities are primarily performed during this specific phase? (Select 3)",
      "explanation": "Testing verifies required behavior, records defects, and checks conformance to specifications. Fixing code and collecting feature requests are different primary activities.",
      "options": [
        "Reviewing the source code to fix syntax errors.",
        "Verifying that the application functions correctly according to requirements.",
        "Requesting customers to submit bug reports.",
        "Identifying and logging defects or bugs within the application.",
        "Ensuring the application aligns with the original design specifications.",
        "Asking customers to provide requests for new features."
      ],
      "correct": [
        1,
        3,
        4
      ]
    },
    {
      "id": "web-213",
      "chapter": "html-forms",
      "type": "single",
      "question": "A developer creates a form input with the following pattern attribute:\npattern=\"[A-Z]{3}-\\d{4}\"\n\nWhich of the following values will successfully validate against this pattern?",
      "explanation": "The pattern requires exactly three uppercase letters, a hyphen, and four digits, matched against the entire nonempty value.",
      "options": [
        "abc-1234",
        "ABC-123",
        "ABC-1234",
        "ABC1234"
      ],
      "correct": 2
    },
    {
      "id": "web-214",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "All three flex items initially have order: 0. Complete the rule with the smallest positive integer that places A after B and C.",
      "explanation": "Flex items default to order: 0, so giving A order: 1 places it after the unchanged B and C items.",
      "dragItems": [
        {
          "id": "i1",
          "text": "order"
        },
        {
          "id": "i2",
          "text": "flex-grow"
        },
        {
          "id": "i3",
          "text": "flex-shrink"
        },
        {
          "id": "i4",
          "text": "flex-basis"
        },
        {
          "id": "i5",
          "text": "0"
        },
        {
          "id": "i6",
          "text": "2"
        },
        {
          "id": "i7",
          "text": "3"
        },
        {
          "id": "i8",
          "text": "1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": ".item-a { [1]: [2]; }"
    },
    {
      "id": "web-215",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You are creating a login form. The password field must be hidden from view as the user types and must be a required field to submit the form. Complete the markup.\n\ninput type=\"\n[1]\n\" name=\"pwd\" \n[2]",
      "explanation": "password masks normal on-screen entry, and required makes an empty value invalid. Masking does not encrypt the transmitted password.",
      "dragItems": [
        {
          "id": "i1",
          "text": "url"
        },
        {
          "id": "i2",
          "text": "text"
        },
        {
          "id": "i3",
          "text": "email"
        },
        {
          "id": "i4",
          "text": "password"
        },
        {
          "id": "i5",
          "text": "disabled"
        },
        {
          "id": "i6",
          "text": "multiple"
        },
        {
          "id": "i7",
          "text": "required"
        },
        {
          "id": "i8",
          "text": "readonly"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-216",
      "chapter": "html-forms",
      "type": "multiple",
      "question": "A front-end developer is creating an animation for a button and needs to apply 2D effects using the CSS `transform` property.\n\nWhich two functions are valid values that can be used with this property? (Choose 2)",
      "explanation": "skew() and matrix() are valid CSS transform functions. move(), expand(), and scroll() are not.",
      "options": [
        "skew()",
        "move()",
        "matrix()",
        "expand()",
        "scroll()"
      ],
      "correct": [
        0,
        2
      ]
    },
    {
      "id": "web-217",
      "chapter": "javascript",
      "type": "single",
      "question": "Which event triggers IMMEDIATELY when the user types a character into a text field, allowing for real-time updates?",
      "explanation": "The input event fires when an editable control's value changes through user input, making it suitable for real-time feedback.",
      "options": [
        "onclick",
        "onchange",
        "oninput",
        "onmouseover"
      ],
      "correct": 2
    },
    {
      "id": "web-218",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "You want to add or remove the class \"dark-mode\" from the body element when a button is clicked (toggle effect).",
      "explanation": "classList.toggle adds a missing class or removes an existing one.",
      "dragItems": [
        {
          "id": "i1",
          "text": "classList"
        },
        {
          "id": "i2",
          "text": "className"
        },
        {
          "id": "i3",
          "text": "style"
        },
        {
          "id": "i4",
          "text": "dataset"
        },
        {
          "id": "i5",
          "text": "add"
        },
        {
          "id": "i6",
          "text": "remove"
        },
        {
          "id": "i7",
          "text": "contains"
        },
        {
          "id": "i8",
          "text": "toggle"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "document.body.[1].[2](\"dark-mode\");"
    },
    {
      "id": "web-219",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "You have a CSS Grid container and you want to create a 20px space between the rows and columns without adding margins to the individual items.",
      "explanation": "gap sets spacing between grid rows and columns without adding exterior margins to the grid items.",
      "dragItems": [
        {
          "id": "i1",
          "text": "padding"
        },
        {
          "id": "i2",
          "text": "margin"
        },
        {
          "id": "i3",
          "text": "border-spacing"
        },
        {
          "id": "i4",
          "text": "gap"
        },
        {
          "id": "i5",
          "text": "1"
        },
        {
          "id": "i6",
          "text": "2"
        },
        {
          "id": "i7",
          "text": "20px"
        },
        {
          "id": "i8",
          "text": "0"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": ".grid-container {\n  display: grid;\n  [1]: [2];\n}"
    },
    {
      "id": "web-220",
      "chapter": "html-forms",
      "type": "single",
      "question": "A web developer is creating an interactive SVG graphic. They need to animate a rectangle so that it spins 360 degrees in place.\n\nWhich specific SVG element is used to animate the `transform` attribute to achieve this rotation effect?",
      "explanation": "animateTransform animates transform values such as rotation; animateMotion moves an element along a motion path.",
      "options": [
        "<animateMotion>",
        "<path>",
        "<animateTransform>",
        "<circle>"
      ],
      "correct": 2
    },
    {
      "id": "web-221",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "Evaluate each statement independently against the initial array: let cars = [\"BMW\", \"Audi\"].",
      "explanation": "Evaluated independently against the initial array, push appends, pop removes Audi, and length is 2.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The method cars.push(\"Tesla\") adds the element to the beginning of the array.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The method cars.pop() removes the last element from the array (\"Audi\").",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The property cars.length will return 2.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "web-222",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "For each statement regarding the HTML5 'input' types and attributes, indicate Yes if the statement is true and No if the statement is false.",
      "explanation": "email applies syntactic email validation to nonempty values, placeholder is only a hint, and maxlength limits text length. Email syntax validation does not verify mailbox existence.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The 'type=\"email\"' attribute automatically validates that the text entered is in a proper email format.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The 'placeholder' attribute sets the default value that is sent to the server when the form is submitted.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The 'maxlength' attribute limits the number of characters a user can type into a text field.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "web-223",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "To ensure your responsive website renders correctly on mobile devices without zooming out, you need to configure the viewport meta tag. Complete the code.",
      "explanation": "device-width aligns the layout viewport to the device width, and initial-scale=1.0 sets the initial zoom scale.",
      "dragItems": [
        {
          "id": "i1",
          "text": "100%"
        },
        {
          "id": "i2",
          "text": "auto"
        },
        {
          "id": "i3",
          "text": "screen-width"
        },
        {
          "id": "i4",
          "text": "device-width"
        },
        {
          "id": "i5",
          "text": "2.0"
        },
        {
          "id": "i6",
          "text": "auto"
        },
        {
          "id": "i7",
          "text": "1.0"
        },
        {
          "id": "i8",
          "text": "0.5"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<meta name=\"viewport\" content=\"width=[1], initial-scale=[2]\">"
    },
    {
      "id": "web-224",
      "chapter": "lifecycle",
      "type": "dropdown",
      "question": "You want to place an image on the left side of a container so that the paragraph text wraps around it on the right side.\n\nimg {\n\n[1]\n: \n[2]\n;\nmargin-right: 10px;\n}",
      "explanation": "float: left places the image to the left and lets subsequent inline text flow around it.",
      "dragItems": [
        {
          "id": "i1",
          "text": "str"
        },
        {
          "id": "i2",
          "text": "bool"
        },
        {
          "id": "i3",
          "text": "float"
        },
        {
          "id": "i4",
          "text": "int"
        },
        {
          "id": "i5",
          "text": "none"
        },
        {
          "id": "i6",
          "text": "left"
        },
        {
          "id": "i7",
          "text": "right"
        },
        {
          "id": "i8",
          "text": "center"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-225",
      "chapter": "css-layout",
      "type": "single",
      "question": "You have a div element with a fixed height of 200px containing a long article. You want the user to be able to read the entire text by scrolling, but you only want the scrollbar to appear if the text is actually too long to fit. Which CSS property should you apply?",
      "explanation": "overflow: auto supplies scrolling when content overflows rather than always showing scrollbars or clipping the content.",
      "options": [
        "overflow: visible",
        "overflow: hidden",
        "overflow: scroll",
        "overflow: auto"
      ],
      "correct": 3
    },
    {
      "id": "web-226",
      "chapter": "javascript",
      "type": "drag_drop",
      "question": "Match the values with their correct JavaScript data type.\nlet a = \"Hello\"; // is a \nlet b = 10; // is a \nlet c = true; // is a",
      "explanation": "Quoted text is a string, 10 is a number, and true is a Boolean.",
      "dragItems": [
        {
          "id": "i1",
          "text": "string"
        },
        {
          "id": "i2",
          "text": "number"
        },
        {
          "id": "i3",
          "text": "boolean"
        },
        {
          "id": "i4",
          "text": "array"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "let a = \"Hello\"; // is a",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "let b = 10; // is a",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "let c = true; // is a",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-227",
      "chapter": "javascript",
      "type": "single",
      "question": "You have an array: let numbers = [0, 1, 2, 3, 4]. You want to create a COPY of the first two elements ([0, 1]) without modifying the original array. Which method should you use?",
      "explanation": "slice returns a shallow copy of the selected range without removing elements from the original array. splice would mutate it.",
      "options": [
        "numbers.splice(0, 2)",
        "numbers.slice(0, 2)",
        "numbers.cut(0, 2)",
        "numbers.shift(2)"
      ],
      "correct": 1
    },
    {
      "id": "web-228",
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "A web designer is styling an image gallery and wants to apply specific visual effects to three different photos using inline CSS.\n\n1. The first image needs an \"antique\" or \"old photograph\" look (brown tone).\n\n[1]\n\n2. The second image needs to be semi-transparent to blend with the background.\n\n[2]\n\n3. The third image needs to appear as if it is floating above the page with a shadow.\n\n[3]",
      "explanation": "sepia adds a brown photographic tone, opacity makes the entire image translucent, and drop-shadow creates an offset shadow around its rendered shape.",
      "dragItems": [
        {
          "id": "i1",
          "text": "filter: blur(5px);"
        },
        {
          "id": "i2",
          "text": "filter: brightness(50%);"
        },
        {
          "id": "i3",
          "text": "filter: sepia(100%);"
        },
        {
          "id": "i4",
          "text": "filter: grayscale(100%);"
        },
        {
          "id": "i5",
          "text": "opacity: 50;"
        },
        {
          "id": "i6",
          "text": "opacity: 0.5;"
        },
        {
          "id": "i7",
          "text": "opacity: 1;"
        },
        {
          "id": "i8",
          "text": "opacity: 0;"
        },
        {
          "id": "i9",
          "text": "filter: drop-shadow(5px 5px 10px gray);"
        },
        {
          "id": "i10",
          "text": "filter: box-shadow(5px 5px 10px gray);"
        },
        {
          "id": "i11",
          "text": "transform: drop-shadow(5px 5px 10px gray);"
        },
        {
          "id": "i12",
          "text": "filter: shadow(5px 5px 10px gray);"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "image": "assets/html5/pdf-067-image-filters.png"
    },
    {
      "id": "web-229",
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "Connect each phase of the software lifecycle to the activity that belongs to it.\nDrag every phase name on the left and drop it into the blank (  ) next to the correct activity on the right.\nYou earn points for every correct connection.\n\nActivities:\n- Construct the HTML pages \n- Upload the site to the server \n- Sketch the page wireframes \n- Check links and forms for errors \n- Keep the content and code up-to-date \n- Decide what the site must do and for whom",
      "explanation": "Development constructs the pages, deployment publishes them, design creates wireframes, testing checks behavior, maintenance updates the product, and planning defines its purpose.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Plan"
        },
        {
          "id": "i2",
          "text": "Design"
        },
        {
          "id": "i3",
          "text": "Develop"
        },
        {
          "id": "i4",
          "text": "Test"
        },
        {
          "id": "i5",
          "text": "Deploy"
        },
        {
          "id": "i6",
          "text": "Maintain"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Construct the HTML pages",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Upload the site to the server",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "Sketch the page wireframes",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Check links and forms for errors",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Keep the content and code up-to-date",
          "correctItemId": "i6"
        },
        {
          "id": "z6",
          "label": "Decide what the site must do and for whom",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "web-230",
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "Arrange the following stages of the Application Lifecycle Management (ALM) process in the correct chronological order, starting from the initial concept.\n\nStage 1 \nStage 2 \nStage 3 \nStage 4 \nStage 5",
      "explanation": "The simplified lifecycle progresses from planning to design, implementation, testing, and deployment; maintenance follows afterward.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Design"
        },
        {
          "id": "i2",
          "text": "Plan"
        },
        {
          "id": "i3",
          "text": "Test"
        },
        {
          "id": "i4",
          "text": "Develop"
        },
        {
          "id": "i5",
          "text": "Deploy"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Stage 1",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Stage 2",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Stage 3",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "Stage 4",
          "correctItemId": "i3"
        },
        {
          "id": "z5",
          "label": "Stage 5",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "web-231",
      "chapter": "graphics",
      "type": "single",
      "question": "A developer is using the HTML5 Canvas API to draw shapes.\nWhat does the following method call accomplish?\n\nctx.strokeRect(20, 20, 150, 100);",
      "explanation": "strokeRect draws a rectangular outline using the current stroke style without filling its interior.",
      "options": [
        "It draws a solid, filled rectangle.",
        "It creates a rectangular clipping region.",
        "It draws the outline of a rectangle without filling it.",
        "It clears a rectangular area on the canvas."
      ],
      "correct": 2
    },
    {
      "id": "web-232",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "A developer wants to create a slider control that allows users to select a volume level between 0 and 10 in steps of 1.\nUsing the dropdown arrow, complete the HTML code to create this input field.\n\n<label for=\"vol\">Volume:\n<input type=\"\n[1]\n\" id=\"vol\" name=\"vol\" min=\"0\" max=\"10\" step=\"1\">",
      "explanation": "An input of type range provides a slider with the specified minimum, maximum, and step.",
      "dragItems": [
        {
          "id": "i1",
          "text": "url"
        },
        {
          "id": "i2",
          "text": "text"
        },
        {
          "id": "i3",
          "text": "email"
        },
        {
          "id": "i4",
          "text": "range"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "web-233",
      "chapter": "graphics",
      "type": "single",
      "question": "You are creating a flexible container using CSS Flexbox.\nWhich property is used to define how flex items are distributed along the **main axis** (e.g., to push them apart to the edges)?",
      "explanation": "justify-content controls distribution along the flex main axis; align-items operates on the cross axis.",
      "options": [
        "align-items",
        "flex-direction",
        "justify-content",
        "align-content"
      ],
      "correct": 2
    },
    {
      "id": "web-234",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "A developer wants to listen for a \"click\" event on a button with the ID `submitBtn` and run the function `sendData` when it occurs.",
      "explanation": "addEventListener registers sendData as a handler for the click event without calling it immediately.",
      "dragItems": [
        {
          "id": "i1",
          "text": "dispatchEvent"
        },
        {
          "id": "i2",
          "text": "addEventListener"
        },
        {
          "id": "i3",
          "text": "attachEvent"
        },
        {
          "id": "i4",
          "text": "onclick"
        },
        {
          "id": "i5",
          "text": "click"
        },
        {
          "id": "i6",
          "text": "touchstart"
        },
        {
          "id": "i7",
          "text": "touchend"
        },
        {
          "id": "i8",
          "text": "mousedown"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "var btn = document.getElementById(\"submitBtn\");\nbtn.[1](\"[2]\", sendData);"
    },
    {
      "id": "web-235",
      "chapter": "lifecycle",
      "type": "single",
      "question": "A developer is troubleshooting a web application and wants to pause the code execution at a specific line to inspect the values of variables.\nWhich tool within the browser's developer tools should be used?",
      "explanation": "A breakpoint pauses execution at a selected location so variables and the call stack can be inspected.",
      "options": [
        "Validator",
        "Breakpoint",
        "Profiler",
        "Network Monitor"
      ],
      "correct": 1
    },
    {
      "id": "web-236",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "A developer needs to draw a red circle using SVG. The circle must be centered at coordinates (100, 100) with a radius of 50.\nUsing the dropdown arrows, complete the markup to define this shape.\n\n<svg height=\"200\" width=\"200\">\n<\n[1]\n cx=\"100\" cy=\"100\" \n[2]\n=\"50\" fill=\"red\" />\n</svg>",
      "explanation": "An SVG circle uses cx and cy for its center and r for its radius.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ellipse"
        },
        {
          "id": "i2",
          "text": "line"
        },
        {
          "id": "i3",
          "text": "rect"
        },
        {
          "id": "i4",
          "text": "circle"
        },
        {
          "id": "i5",
          "text": "b"
        },
        {
          "id": "i6",
          "text": "u"
        },
        {
          "id": "i7",
          "text": "r"
        },
        {
          "id": "i8",
          "text": "f"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-237",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "A developer wants to rotate a `div` element by 90 degrees and double its size using CSS.\nUsing drag and drop, complete the CSS rule below.",
      "explanation": "transform combines rotate(90deg) with scale(2) to rotate and uniformly double the element's size.",
      "dragItems": [
        {
          "id": "i1",
          "text": "filter"
        },
        {
          "id": "i2",
          "text": "animation"
        },
        {
          "id": "i3",
          "text": "transform"
        },
        {
          "id": "i4",
          "text": "transition"
        },
        {
          "id": "i5",
          "text": "skew"
        },
        {
          "id": "i6",
          "text": "scale"
        },
        {
          "id": "i7",
          "text": "translate"
        },
        {
          "id": "i8",
          "text": "rotate"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": ".box {\n  [1]: rotate(90deg) [2](2);\n}"
    },
    {
      "id": "web-238",
      "chapter": "javascript",
      "type": "single",
      "question": "You are creating a new class named `Car` that inherits properties and methods from an existing class named `Vehicle`.\nWhich keyword is used to establish this inheritance relationship?",
      "explanation": "The extends keyword establishes JavaScript class inheritance; super is used to access parent behavior.",
      "options": [
        "implements",
        "inherits",
        "extends",
        "super"
      ],
      "correct": 2
    },
    {
      "id": "web-239",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "A developer needs to save a user's preference for \"dark mode\" in the browser so that it persists even after the browser is closed and reopened.\nUsing drag and drop, complete the JavaScript code to store this data.",
      "explanation": "localStorage.setItem stores a string value that normally persists across browser sessions unless cleared or unavailable.",
      "dragItems": [
        {
          "id": "i1",
          "text": "setItem"
        },
        {
          "id": "i2",
          "text": "getItem"
        },
        {
          "id": "i3",
          "text": "removeItem"
        },
        {
          "id": "i4",
          "text": "clear"
        },
        {
          "id": "i5",
          "text": "light"
        },
        {
          "id": "i6",
          "text": "system"
        },
        {
          "id": "i7",
          "text": "default"
        },
        {
          "id": "i8",
          "text": "dark"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "localStorage.[1](\"theme\", \"[2]\");"
    },
    {
      "id": "web-240",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete the media query to apply styles at viewport widths of 768px or greater.",
      "explanation": "The min-width feature includes 768px and larger viewports. A strictly greater-than condition would instead use a range query such as width > 768px.",
      "dragItems": [
        {
          "id": "i1",
          "text": "max-width"
        },
        {
          "id": "i2",
          "text": "width"
        },
        {
          "id": "i3",
          "text": "device-height"
        },
        {
          "id": "i4",
          "text": "min-width"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ],
      "code": "@media screen and ([1]: 768px) {\n  body { background-color: lightblue; }\n}"
    },
    {
      "id": "web-241",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "A developer is creating a grid layout with three columns.\n- The first column should be 100 pixels wide.\n- The second column should take up all remaining available space.\n- The third column should be 100 pixels wide.",
      "explanation": "Fixed outer tracks use 100px each and the fractional middle track receives remaining available space.",
      "dragItems": [
        {
          "id": "i1",
          "text": "2fr"
        },
        {
          "id": "i2",
          "text": "auto"
        },
        {
          "id": "i3",
          "text": "100px"
        },
        {
          "id": "i4",
          "text": "1fr"
        },
        {
          "id": "i5",
          "text": "auto"
        },
        {
          "id": "i6",
          "text": "1fr"
        },
        {
          "id": "i7",
          "text": "100px"
        },
        {
          "id": "i8",
          "text": "2fr"
        },
        {
          "id": "i9",
          "text": "100px"
        },
        {
          "id": "i10",
          "text": "1fr"
        },
        {
          "id": "i11",
          "text": "2fr"
        },
        {
          "id": "i12",
          "text": "auto"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": ".container {\n  display: grid;\n  grid-template-columns: [1] [2] [3];\n}"
    },
    {
      "id": "web-242",
      "chapter": "css-layout",
      "type": "single",
      "question": "Which method of the Geolocation API is used to retrieve the user's position **one time** (not tracking it continuously)?",
      "explanation": "getCurrentPosition requests one position result; watchPosition requests ongoing updates, subject to user permission and browser security requirements.",
      "options": [
        "navigator.geolocation.watchPosition()",
        "navigator.geolocation.clearWatch()",
        "navigator.geolocation.getCurrentPosition()",
        "navigator.geolocation.getPosition()"
      ],
      "correct": 2
    },
    {
      "id": "web-243",
      "chapter": "css-effects",
      "type": "dropdown",
      "question": "A developer is creating a CSS animation named \"fadeIn\".\nUsing drag and drop, complete the code to define the keyframes.",
      "explanation": "@keyframes names the animation; from denotes its initial state and to its final state.",
      "dragItems": [
        {
          "id": "i1",
          "text": "@keyframes"
        },
        {
          "id": "i2",
          "text": "@animation"
        },
        {
          "id": "i3",
          "text": "@font-face"
        },
        {
          "id": "i4",
          "text": "@media"
        },
        {
          "id": "i5",
          "text": "with"
        },
        {
          "id": "i6",
          "text": "as"
        },
        {
          "id": "i7",
          "text": "in"
        },
        {
          "id": "i8",
          "text": "from"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "[1] fadeIn {\n  [2] { opacity: 0; }\n  to { opacity: 1; }\n}"
    },
    {
      "id": "web-244",
      "chapter": "javascript",
      "type": "single",
      "question": "You receive a data string from a web server in JSON format:\n'{\"name\":\"John\", \"age\":30}'.\nWhich JavaScript method should you use to convert this string into a valid JavaScript object?",
      "explanation": "JSON.parse converts a valid JSON string into its corresponding JavaScript value; stringify performs the opposite conversion.",
      "options": [
        "JSON.stringify()",
        "JSON.toString()",
        "JSON.parse()",
        "JSON.convert()"
      ],
      "correct": 2
    },
    {
      "id": "web-245",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "A developer wants to ensure that a text input field accepts only exactly three uppercase letters (e.g., \"ABC\").\nUsing drag and drop, complete the input element's validation attribute.",
      "explanation": "pattern validates the entire nonempty value against three uppercase ASCII letters. Add required if empty values must also be rejected.",
      "dragItems": [
        {
          "id": "i1",
          "text": "maxlength"
        },
        {
          "id": "i2",
          "text": "placeholder"
        },
        {
          "id": "i3",
          "text": "pattern"
        },
        {
          "id": "i4",
          "text": "minlength"
        },
        {
          "id": "i5",
          "text": "[A-Z]{3} = None"
        },
        {
          "id": "i6",
          "text": "[A-Z]{3}"
        },
        {
          "id": "i7",
          "text": "(A-Z){3}"
        },
        {
          "id": "i8",
          "text": "[A-Z]{3}()"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<input type=\"text\" [1]=\"[2]\" title=\"Three uppercase letters\">"
    },
    {
      "id": "web-246",
      "chapter": "graphics",
      "type": "single",
      "question": "You have a flex container with multiple items that exceed the container's width.\nWhich CSS property should you set to ensure the items move to the next line instead of shrinking or overflowing?",
      "explanation": "flex-wrap: wrap permits flex items to form additional lines when necessary.",
      "options": [
        "flex-direction: column;",
        "flex-wrap: wrap;",
        "overflow: scroll;",
        "display: block;"
      ],
      "correct": 1
    },
    {
      "id": "web-247",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "A developer wants to apply a blur effect of 5 pixels to an image class.\nUsing the dropdown arrow, complete the CSS rule.\n\n.blurred-image {\n\n[1]\n: \n[2]\n(5px);\n}",
      "explanation": "filter: blur(5px) applies a Gaussian blur with a length-valued blur radius.",
      "dragItems": [
        {
          "id": "i1",
          "text": "filter"
        },
        {
          "id": "i2",
          "text": "transform"
        },
        {
          "id": "i3",
          "text": "transition"
        },
        {
          "id": "i4",
          "text": "animation"
        },
        {
          "id": "i5",
          "text": "grayscale"
        },
        {
          "id": "i6",
          "text": "sepia"
        },
        {
          "id": "i7",
          "text": "brightness"
        },
        {
          "id": "i8",
          "text": "blur"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-248",
      "chapter": "javascript",
      "type": "single",
      "question": "In the JavaScript event flow, what is the term for the phase where an event triggers on the target element and then propagates upward to its parents (e.g., from a button up to the div containing it)?",
      "explanation": "Bubbling propagates a bubbling event outward from its target through ancestor elements.",
      "options": [
        "Capturing",
        "Hoisting",
        "Bubbling",
        "Delegation"
      ],
      "correct": 2
    },
    {
      "id": "web-249",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "A developer is using the Fetch API to retrieve data from a URL.\nUsing drag and drop, complete the promise chain to handle the response.",
      "explanation": "Response.json reads and parses a JSON response body and returns a promise for the resulting value.",
      "dragItems": [
        {
          "id": "i1",
          "text": "blob"
        },
        {
          "id": "i2",
          "text": "arrayBuffer"
        },
        {
          "id": "i3",
          "text": "json"
        },
        {
          "id": "i4",
          "text": "text"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ],
      "code": "fetch(\"https://api.example.com/data\")\n  .then(response => response.[1]())\n  .then(data => console.log(data));"
    },
    {
      "id": "web-250",
      "chapter": "html-forms",
      "type": "single",
      "question": "A developer is drawing on the HTML5 Canvas and needs to move the origin (0,0) of the coordinate system to the center of the canvas.\nWhich method should be used to achieve this shift?",
      "explanation": "translate changes the canvas transformation origin. moveTo only moves the current path's drawing point.",
      "options": [
        "ctx.moveTo(x, y)",
        "ctx.translate(x, y)",
        "ctx.shift(x, y)",
        "ctx.transform(x, y)"
      ],
      "correct": 1
    },
    {
      "id": "web-251",
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "Match the HTML5 input attribute to its correct function.\n\nSpecifies that the input field must be filled out before submitting: \nSpecifies a short hint that describes the expected value (e.g., \"name@example.com\"): \nSpecifies that the input field should automatically get focus when the page loads:",
      "explanation": "required enforces a value, placeholder shows a hint, and autofocus requests initial focus on the control.",
      "dragItems": [
        {
          "id": "i1",
          "text": "placeholder"
        },
        {
          "id": "i2",
          "text": "required"
        },
        {
          "id": "i3",
          "text": "autofocus"
        },
        {
          "id": "i4",
          "text": "mandatory"
        },
        {
          "id": "i5",
          "text": "hint"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Specifies that the input field must be filled out before submitting:",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Specifies a short hint that describes the expected value (e.g., \"name@example.com\"):",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Specifies that the input field should automatically get focus when the page loads:",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "web-252",
      "chapter": "javascript",
      "type": "single",
      "question": "A developer needs to store temporary data that is available for the duration of the page session (as long as the browser tab is open) but is lost when the tab is closed.\nWhich storage mechanism should be used?",
      "explanation": "sessionStorage is scoped to the origin and browsing context and ordinarily lasts for that tab's page session.",
      "options": [
        "localStorage",
        "cookies",
        "sessionStorage",
        "IndexedDB"
      ],
      "correct": 2
    },
    {
      "id": "web-253",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "A developer wants to add a 20-pixel space between all rows and columns in a CSS Grid container.\nUsing the dropdown arrow, complete the CSS property.\n\n.grid-container {\ndisplay: grid;\n\n[1]\n: 20px;\n}",
      "explanation": "gap sets both row and column spacing when a single length is supplied.",
      "dragItems": [
        {
          "id": "i1",
          "text": "margin"
        },
        {
          "id": "i2",
          "text": "border-spacing"
        },
        {
          "id": "i3",
          "text": "gap"
        },
        {
          "id": "i4",
          "text": "padding"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "web-254",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "A developer is defining a JavaScript class named `Rectangle`.\nUsing drag and drop, complete the code to initialize the object's properties when a new instance is created.",
      "explanation": "constructor initializes new instances, and this refers to the instance receiving height and width properties.",
      "dragItems": [
        {
          "id": "i1",
          "text": "init"
        },
        {
          "id": "i2",
          "text": "constructor"
        },
        {
          "id": "i3",
          "text": "function"
        },
        {
          "id": "i4",
          "text": "initialize"
        },
        {
          "id": "i5",
          "text": "this"
        },
        {
          "id": "i6",
          "text": "self"
        },
        {
          "id": "i7",
          "text": "super"
        },
        {
          "id": "i8",
          "text": "window"
        },
        {
          "id": "i9",
          "text": "self"
        },
        {
          "id": "i10",
          "text": "super"
        },
        {
          "id": "i11",
          "text": "window"
        },
        {
          "id": "i12",
          "text": "this"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "code": "class Rectangle {\n  [1](height, width) {\n    [2].height = height;\n    [3].width = width;\n  }\n}"
    },
    {
      "id": "web-255",
      "chapter": "lifecycle",
      "type": "single",
      "question": "A software team has successfully tested their web application and resolved all critical bugs.\nThey are now ready to make the application available to end-users on a public server.\nWhich stage of the Application Lifecycle Management (ALM) process is this?",
      "explanation": "Deployment makes the tested application available in its target environment.",
      "options": [
        "Maintain",
        "Deploy",
        "Design",
        "Plan"
      ],
      "correct": 1
    },
    {
      "id": "web-256",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Complete the SVG path: move to (10, 10), then draw a straight line to (50, 50).",
      "explanation": "An SVG path's d attribute contains drawing commands; M moves to a point and L draws a line to the next point.",
      "dragItems": [
        {
          "id": "i1",
          "text": "points"
        },
        {
          "id": "i2",
          "text": "path"
        },
        {
          "id": "i3",
          "text": "src"
        },
        {
          "id": "i4",
          "text": "d"
        },
        {
          "id": "i5",
          "text": "C"
        },
        {
          "id": "i6",
          "text": "Z"
        },
        {
          "id": "i7",
          "text": "L"
        },
        {
          "id": "i8",
          "text": "M"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "<svg>\n  <path [1]=\"M 10 10 [2] 50 50\" stroke=\"black\" fill=\"none\" />\n</svg>"
    },
    {
      "id": "web-257",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "A developer wants to use a custom font named \"MyWebFont\" located in a file named \"myfont.woff\".\nUsing drag and drop, complete the CSS `@font-face` rule.",
      "explanation": "url specifies the font resource and format(\"woff\") identifies its font container format.",
      "dragItems": [
        {
          "id": "i1",
          "text": "email"
        },
        {
          "id": "i2",
          "text": "password"
        },
        {
          "id": "i3",
          "text": "url"
        },
        {
          "id": "i4",
          "text": "text"
        },
        {
          "id": "i5",
          "text": "png"
        },
        {
          "id": "i6",
          "text": "woff"
        },
        {
          "id": "i7",
          "text": "ttf"
        },
        {
          "id": "i8",
          "text": "svg"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "@font-face {\n  font-family: \"MyWebFont\";\n  src: [1](\"myfont.woff\") format(\"[2]\");\n}"
    },
    {
      "id": "web-258",
      "chapter": "javascript",
      "type": "single",
      "question": "You are validating a form using JavaScript.\nIf the validation fails, you need to stop the form from being submitted to the server and reloading the page.\nWhich method of the event object should you call?",
      "explanation": "preventDefault cancels a cancelable event's default action, such as normal form submission. Stopping propagation alone does not cancel submission.",
      "options": [
        "event.stopPropagation()",
        "event.preventDefault()",
        "event.stopImmediatePropagation()",
        "event.cancelBubble = true"
      ],
      "correct": 1
    },
    {
      "id": "web-259",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "A developer is using the jQuery library to hide all elements with the class \"alert-box\" when a button is clicked.\nUsing drag and drop, complete the jQuery syntax.",
      "explanation": "With jQuery loaded, $ selects matching elements and hide makes them hidden without removing them from the DOM.",
      "dragItems": [
        {
          "id": "i1",
          "text": "$"
        },
        {
          "id": "i2",
          "text": "document"
        },
        {
          "id": "i3",
          "text": "window"
        },
        {
          "id": "i4",
          "text": "query"
        },
        {
          "id": "i5",
          "text": "removeClass"
        },
        {
          "id": "i6",
          "text": "show"
        },
        {
          "id": "i7",
          "text": "toggleClass"
        },
        {
          "id": "i8",
          "text": "hide"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "[1](\".alert-box\").[2]();"
    },
    {
      "id": "web-260",
      "chapter": "graphics",
      "type": "drag_drop",
      "question": "A developer is structuring a news article page using HTML5 semantic elements.\nUsing drag and drop, match the content description to the correct HTML tag.\n\nContainer for independent, self-contained content (like a blog post): \nContainer for introductory content (logos, navigation, headlines): \nContainer for content aside from the content it is placed in (like a sidebar):",
      "explanation": "article represents self-contained content, header provides introductory content, and aside represents tangentially related content.",
      "dragItems": [
        {
          "id": "i1",
          "text": "section"
        },
        {
          "id": "i2",
          "text": "article"
        },
        {
          "id": "i3",
          "text": "header"
        },
        {
          "id": "i4",
          "text": "aside"
        },
        {
          "id": "i5",
          "text": "footer"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Container for independent, self-contained content (like a blog post):",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Container for introductory content (logos, navigation, headlines):",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Container for content aside from the content it is placed in (like a sidebar):",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "web-261",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "A developer wants to create a background that transitions smoothly from blue at the top to green at the bottom.\nUsing the dropdown arrow, select the correct CSS function.\n\n.background {\nbackground-image: \n[1]\n(to bottom, blue, green);\n}",
      "explanation": "linear-gradient(to bottom, blue, green) creates a vertical color transition from blue to green.",
      "dragItems": [
        {
          "id": "i1",
          "text": "conic-gradient"
        },
        {
          "id": "i2",
          "text": "repeating-radial-gradient"
        },
        {
          "id": "i3",
          "text": "linear-gradient"
        },
        {
          "id": "i4",
          "text": "radial-gradient"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "web-262",
      "chapter": "javascript",
      "type": "single",
      "question": "Which attribute should be added to the `<video>` element to display the built-in play, pause, and volume buttons?",
      "explanation": "controls requests the browser's built-in media playback controls.",
      "options": [
        "autoplay",
        "controls",
        "loop",
        "muted"
      ],
      "correct": 1
    },
    {
      "id": "web-263",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "A developer is building a mobile game and needs to detect when a user first places a finger on the screen.\nUsing drag and drop, complete the event listener code.",
      "explanation": "touchstart fires when a touch point is placed on the touch surface.",
      "dragItems": [
        {
          "id": "i1",
          "text": "touchstart"
        },
        {
          "id": "i2",
          "text": "click"
        },
        {
          "id": "i3",
          "text": "touchend"
        },
        {
          "id": "i4",
          "text": "mousedown"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ],
      "code": "canvas.addEventListener(\"[1]\", handleStart, false);"
    },
    {
      "id": "web-264",
      "chapter": "graphics",
      "type": "single",
      "question": "A developer wants to add a shadow effect around a button to give it depth.\nWhich CSS property syntax is correct for creating a black shadow with a 5px offset and blur?",
      "explanation": "box-shadow applies a shadow to the element's box; the lengths set horizontal offset, vertical offset, and blur radius.",
      "options": [
        "text-shadow: 5px 5px 5px black;",
        "box-shadow: 5px 5px 5px black;",
        "border-shadow: 5px 5px 5px black;",
        "shadow: 5px 5px 5px black;"
      ],
      "correct": 1
    },
    {
      "id": "web-265",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "A developer is defining a layout using CSS Grid Areas.\nUsing drag and drop, complete the grid-template-areas property to create a layout with a \"header\" at the top, a \"sidebar\" and \"content\" in the middle, and a \"footer\" at the bottom.",
      "explanation": "Each row of grid-template-areas must contain the same number of cells. Repeating a name makes that area span both columns.",
      "dragItems": [
        {
          "id": "i1",
          "text": "header ."
        },
        {
          "id": "i2",
          "text": "sidebar header"
        },
        {
          "id": "i3",
          "text": "header header"
        },
        {
          "id": "i4",
          "text": "header sidebar"
        },
        {
          "id": "i5",
          "text": "content footer"
        },
        {
          "id": "i6",
          "text": "footer footer"
        },
        {
          "id": "i7",
          "text": "footer content"
        },
        {
          "id": "i8",
          "text": "footer ."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": ".container {\n  display: grid;\n  grid-template-areas:\n    \"[1]\"\n    \"sidebar content\"\n    \"[2]\";\n}"
    },
    {
      "id": "web-266",
      "chapter": "javascript",
      "type": "single",
      "question": "A developer wants to write a block of code that handles potential runtime errors gracefully.\nWhich structure should be used to \"try\" running code and \"catch\" any errors that occur?",
      "explanation": "try executes protected code and catch handles a thrown exception.",
      "options": [
        "if...else",
        "try...catch",
        "do...while",
        "switch...case"
      ],
      "correct": 1
    },
    {
      "id": "web-267",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "A developer wants to style the **first** paragraph element inside a container.\nUsing the dropdown arrow, select the correct pseudo-class.\n\ndiv p:\n[1]\n {\nfont-weight: bold;\n}",
      "explanation": "first-of-type selects a paragraph that is the first paragraph among its siblings; first-child would require it to be the first child of any type.",
      "dragItems": [
        {
          "id": "i1",
          "text": "first-of-type"
        },
        {
          "id": "i2",
          "text": "first-child"
        },
        {
          "id": "i3",
          "text": "last-child"
        },
        {
          "id": "i4",
          "text": "nth-of-type(2)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "web-268",
      "chapter": "javascript",
      "type": "single",
      "question": "What is the primary difference between `localStorage` and `sessionStorage` regarding data persistence?",
      "explanation": "localStorage normally persists until cleared; sessionStorage lasts for the page session. Both are client-side storage subject to browser policies.",
      "options": [
        "localStorage data is stored on the server, while sessionStorage is stored on the client.",
        "localStorage data has no expiration time, while sessionStorage data is cleared when the page session ends.",
        "sessionStorage can store larger amounts of data than localStorage.",
        "localStorage is only available in Chrome, while sessionStorage is cross-browser."
      ],
      "correct": 1
    },
    {
      "id": "web-269",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "A developer wants to apply a 3D perspective to a container to give depth to its children's 3D transformations.\nUsing drag and drop, complete the CSS rule.",
      "explanation": "perspective supplies a viewing distance that creates depth for transformed descendants.",
      "dragItems": [
        {
          "id": "i1",
          "text": "z-index"
        },
        {
          "id": "i2",
          "text": "opacity"
        },
        {
          "id": "i3",
          "text": "perspective"
        },
        {
          "id": "i4",
          "text": "transform-style"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ],
      "code": ".scene { [1]: 1000px; }"
    },
    {
      "id": "web-270",
      "chapter": "javascript",
      "type": "single",
      "question": "You have the following markup. Line numbers are for reference only.\n\n01 <!DOCTYPE html>\n02 <html>\n03 <body>\n04 <p id=\"output\"></p>\n05 <script>\n06 var employee = '{ \"empID\": \"SH99\", \"firstName\": \"Alice\", \"lastName\": \"Smith\",\n\"email\": \"alice@company.com\" }';\n07\n08 </script>\n09 </body>\n10 </html>\n\nWhich script can you add at line 07 to correctly display the employee ID in the\nparagraph?",
      "explanation": "JSON.parse produces the data object, and data.empID accesses its property before assigning text to the target paragraph.",
      "options": [
        "var data = JSON.stringify(employee); document.getElementById(\"output\").innerHTML = \"ID: \" + employee.empID;",
        "var data = JSON.parse(employee); document.getElementById(\"output\").innerHTML = \"ID: \" + empID;",
        "var data = JSON.stringify(employee); document.getElementsByClassName(\"output\").innerHTML = \"ID: \" + data.empID;",
        "var data = JSON.parse(employee); document.getElementById(\"output\").innerHTML = \"ID: \" + data.empID;"
      ],
      "correct": 3
    },
    {
      "id": "web-271",
      "chapter": "javascript",
      "type": "single",
      "question": "Which JavaScript method is commonly used to create a circular arc or a full circle when\ndrawing on a canvas element?",
      "explanation": "Canvas arc creates a circular arc; a full circle uses an angle span of 2*pi. ellipse can also create a circle, but arc is the circular-arc method requested.",
      "options": [
        "ellipse",
        "bezierCurveTo",
        "arc",
        "drawCircle"
      ],
      "correct": 2
    },
    {
      "id": "web-272",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "Identify the correct sequence of the software development lifecycle stages.\nFor each stage, select the appropriate phase from the list.\n\nStage 1: \n[1]\n\nStage 2: \n[2]\n\nStage 3: \n[3]\n\nStage 4: \n[4]\n\nStage 5: \n[5]\n\nStage 6: \n[6]",
      "explanation": "This conventional simplified lifecycle defines requirements, designs, implements, tests, publishes, and then maintains the application.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Plan"
        },
        {
          "id": "i2",
          "text": "Design"
        },
        {
          "id": "i3",
          "text": "Develop"
        },
        {
          "id": "i4",
          "text": "Test"
        },
        {
          "id": "i5",
          "text": "Plan"
        },
        {
          "id": "i6",
          "text": "Develop"
        },
        {
          "id": "i7",
          "text": "Test"
        },
        {
          "id": "i8",
          "text": "Design"
        },
        {
          "id": "i9",
          "text": "Design"
        },
        {
          "id": "i10",
          "text": "Test"
        },
        {
          "id": "i11",
          "text": "Develop"
        },
        {
          "id": "i12",
          "text": "Plan"
        },
        {
          "id": "i13",
          "text": "Develop"
        },
        {
          "id": "i14",
          "text": "Test"
        },
        {
          "id": "i15",
          "text": "Plan"
        },
        {
          "id": "i16",
          "text": "Design"
        },
        {
          "id": "i17",
          "text": "Deploy"
        },
        {
          "id": "i18",
          "text": "Plan"
        },
        {
          "id": "i19",
          "text": "Design"
        },
        {
          "id": "i20",
          "text": "Develop"
        },
        {
          "id": "i21",
          "text": "Plan"
        },
        {
          "id": "i22",
          "text": "Design"
        },
        {
          "id": "i23",
          "text": "Develop"
        },
        {
          "id": "i24",
          "text": "Maintain"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i14",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i17",
          "optionIds": [
            "i17",
            "i18",
            "i19",
            "i20"
          ]
        },
        {
          "id": "z6",
          "label": "Blank [6]",
          "correctItemId": "i24",
          "optionIds": [
            "i21",
            "i22",
            "i23",
            "i24"
          ]
        }
      ]
    },
    {
      "id": "web-273",
      "chapter": "css-layout",
      "type": "multiple",
      "question": "You are designing a container with fixed dimensions.\nWhich two values for the CSS 'overflow' property will result in a scroll bar being\ndisplayed (either always or only when needed) if the content exceeds the container size?\n(Choose 2)",
      "explanation": "scroll requests scrolling regardless of overflow, while auto supplies scrolling when needed. visible and hidden do not display a user scrollbar for the overflow.",
      "options": [
        "scroll",
        "visible",
        "hidden",
        "auto"
      ],
      "correct": [
        0,
        3
      ]
    },
    {
      "id": "web-274",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "You need to debug the code below to determine the state of the 'inventory' array at\nspecific points.\nThe initial arrays are defined as follows:\nvar tools = [\"Hammer\", \"Drill\", \"Saw\", \"Level\", \"Pliers\", \"Wrench\"]; // 6 items\nvar parts = [\"Nails\", \"Bolts\", \"Screws\", \"Washers\", \"Nuts\"]; // 5 items\nvar inventory = [];\n\n01 function addParts() {\n02 inventory = inventory.concat(parts);\n03 }\n04 function addTools() {\n05 inventory = inventory.concat(tools);\n06 }\n07\n08 tools.shift();\n09 addParts();\n10 // Breakpoint A\n11\n12 inventory.shift();\n13 addTools();\n14 // Breakpoint B\n15\n16 inventory.pop();\n17 inventory.shift();\n18 // Breakpoint C\n\n[1]\n\n[2]\n\n[3]",
      "explanation": "Adding parts creates 5 entries. Removing one and appending the 5 remaining tools gives 9; removing the last and then first gives 7.",
      "dragItems": [
        {
          "id": "i1",
          "text": "1"
        },
        {
          "id": "i2",
          "text": "2"
        },
        {
          "id": "i3",
          "text": "5"
        },
        {
          "id": "i4",
          "text": "0"
        },
        {
          "id": "i5",
          "text": "2"
        },
        {
          "id": "i6",
          "text": "9"
        },
        {
          "id": "i7",
          "text": "0"
        },
        {
          "id": "i8",
          "text": "1"
        },
        {
          "id": "i9",
          "text": "7"
        },
        {
          "id": "i10",
          "text": "0"
        },
        {
          "id": "i11",
          "text": "1"
        },
        {
          "id": "i12",
          "text": "2"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Number of inventory entries at breakpoint A",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Number of inventory entries at breakpoint B",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Number of inventory entries at breakpoint C",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "web-275",
      "chapter": "graphics",
      "type": "single",
      "question": "You are rendering a rectangle on an HTML5 Canvas. The coordinate system origin (0,0) is\nlocated at the top-left corner of the drawing area.\n\nBased on the image provided, identify the correct x, y coordinates for the top-left\ncorner of the inner shape.",
      "explanation": "The inner square's top-left corner is offset 50 units right and 50 units down from the canvas origin.",
      "options": [
        "0, 0",
        "0, 50",
        "50, 0",
        "50, 50"
      ],
      "correct": 3,
      "image": "assets/html5/pdf-106-canvas-square.png"
    },
    {
      "id": "web-276",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You are developing a user form that requires a specific Region Code.\nThe requirement states that the code must be a minimum of 2 characters and a maximum of\n3 characters.\nAdditionally, the user must provide a value; the field cannot be left empty.\n\nComplete the markup below to enforce these validation rules.\n\n<label for=\"region\">Region Code:</label>\n<input type=\"text\" id=\"region\" name=\"region\" \n[1]\n =\"2\" \n[2]\n =\"3\" \n[3]\n >",
      "explanation": "minlength sets the minimum text length, maxlength limits the maximum, and required rejects an empty value.",
      "dragItems": [
        {
          "id": "i1",
          "text": "minlength"
        },
        {
          "id": "i2",
          "text": "maxlength"
        },
        {
          "id": "i3",
          "text": "pattern"
        },
        {
          "id": "i4",
          "text": "placeholder"
        },
        {
          "id": "i5",
          "text": "minlength"
        },
        {
          "id": "i6",
          "text": "pattern"
        },
        {
          "id": "i7",
          "text": "placeholder"
        },
        {
          "id": "i8",
          "text": "maxlength"
        },
        {
          "id": "i9",
          "text": "disabled"
        },
        {
          "id": "i10",
          "text": "multiple"
        },
        {
          "id": "i11",
          "text": "required"
        },
        {
          "id": "i12",
          "text": "readonly"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "web-277",
      "chapter": "html-forms",
      "type": "multiple",
      "question": "You are applying specific visual effects to a div element using CSS3.\nWhich two functions are valid values for the 'transform' property to perform 2D\nmanipulations? (Choose 2)",
      "explanation": "skew() and matrix() are supported 2D transform functions; scroll(), move(), and zoom() are not transform functions.",
      "options": [
        "skew()",
        "scroll()",
        "move()",
        "zoom()",
        "matrix()"
      ],
      "correct": [
        0,
        4
      ]
    },
    {
      "id": "web-278",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You need to complete the code for a secure inventory system form that must meet the\nfollowing criteria:\n\n* The Security Key must be 6-8 characters long and use only letters and numbers.\n* The Tracking Number must follow the pattern ###-##-####.\n\nComplete the markup by selecting the correct option from each drop-down list.\n\n<label for=\"key\"><b>Security Key</b></label>\n<input type=\"password\" placeholder=\"Enter Key\" name=\"key\" required \n[1]\n =\"\n[2]\n\" >\n<label for=\"tracking\"><b>Tracking Number:</b></label>\n<input type=\"text\" id=\"tracking\" name=\"tracking\" placeholder=\"123-45-6789\" \n[3]\n >",
      "explanation": "The first pattern requires 6 through 8 ASCII alphanumeric characters; the second matches the exact digit groups separated by hyphens.",
      "dragItems": [
        {
          "id": "i1",
          "text": "maxlength"
        },
        {
          "id": "i2",
          "text": "placeholder"
        },
        {
          "id": "i3",
          "text": "pattern"
        },
        {
          "id": "i4",
          "text": "minlength"
        },
        {
          "id": "i5",
          "text": "[A-Za-z0-9]{6,8}"
        },
        {
          "id": "i6",
          "text": "pattern=\"[0-9]{3}-[0-9]{2}-[0-9]{4}\""
        },
        {
          "id": "i7",
          "text": "pattern"
        },
        {
          "id": "i8",
          "text": "pattern=\"[0-9]{3}-[0-9]{2}-[0-9]{4}\""
        },
        {
          "id": "i9",
          "text": "pattern"
        },
        {
          "id": "i10",
          "text": "[A-Za-z0-9]{6,8}"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8",
          "optionIds": [
            "i8",
            "i9",
            "i10"
          ]
        }
      ]
    },
    {
      "id": "web-279",
      "chapter": "html-forms",
      "type": "drag_drop",
      "question": "You are structuring a user dashboard form using HTML5 semantic elements.\nMatch each semantic tag to the correct component numbered 1 through 4 in the interface\ndescription below.\n\n1. The visual gauge showing the user's \"Poylty\". \n2. The caption text \"Subscription Details\" that interrupts the border of the group. \n3. The pre-defined list of suggestions attached to the \"Choose delivery frequency\" input\nfield. \n4. The box container grouping the \"Delivery Address\" section together.",
      "explanation": "meter represents a bounded scalar measurement, legend captions a fieldset, datalist supplies suggestions, and fieldset groups controls.",
      "dragItems": [
        {
          "id": "i1",
          "text": "<meter>"
        },
        {
          "id": "i2",
          "text": "<legend>"
        },
        {
          "id": "i3",
          "text": "<datalist>"
        },
        {
          "id": "i4",
          "text": "<fieldset>"
        },
        {
          "id": "i5",
          "text": "<output>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "1. Bounded loyalty gauge",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "2. Caption interrupting the fieldset border",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "3. Suggestions for the delivery-frequency input",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "4. Container grouping Delivery Address controls",
          "correctItemId": "i4"
        }
      ],
      "image": "assets/html5/pdf-107-ocean-fresh-form.png"
    },
    {
      "id": "web-280",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "You define the User class as follows:\n\nclass User {\nconstructor(username) {\nthis.username = username;\nthis.sayHello = function() {\nreturn \"Hello \" + this.username;\n};\n}\n}\n\nYou need to derive an Admin class from the User class.\nComplete the code by selecting the correct option from each drop-down list.\n\nclass Admin \n[1]\n User {\nconstructor(username, permissions) {\n\n[2]\n (username);\nthis.permissions = permissions;\n}\n}",
      "explanation": "extends derives Admin from User; super(username) initializes the parent portion before this is used.",
      "dragItems": [
        {
          "id": "i1",
          "text": "extends"
        },
        {
          "id": "i2",
          "text": "inherits"
        },
        {
          "id": "i3",
          "text": "implements"
        },
        {
          "id": "i4",
          "text": "prototype"
        },
        {
          "id": "i5",
          "text": "this"
        },
        {
          "id": "i6",
          "text": "self"
        },
        {
          "id": "i7",
          "text": "window"
        },
        {
          "id": "i8",
          "text": "super"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "web-281",
      "chapter": "css-layout",
      "type": "dropdown",
      "question": "You are designing a responsive photo gallery using CSS Grid. The design requirements are\nas follows:\n\n* The grid must contain 6 equal columns, each taking up 1 fraction of the available\nwidth.\n* There are 5 rows with specific varied heights.\n* The layout requires a 10px spacing between rows and a 15px spacing between columns.\nComplete the CSS rule for the gallery container.\n\n.gallery-container {\ndisplay: grid;\n\n[1]\n : \n[2]\n (6, 1fr);\n\n[3]\n : 50px 50px 150px 150px 100px;\n\n[4]\n : 10px 15px;\n}",
      "explanation": "repeat defines six equal tracks, grid-template-rows specifies row heights, and the two gap values set row and column spacing respectively.",
      "dragItems": [
        {
          "id": "i1",
          "text": "grid-area"
        },
        {
          "id": "i2",
          "text": "grid-template-areas"
        },
        {
          "id": "i3",
          "text": "grid-auto-flow"
        },
        {
          "id": "i4",
          "text": "grid-template-columns"
        },
        {
          "id": "i5",
          "text": "calc"
        },
        {
          "id": "i6",
          "text": "fit-content"
        },
        {
          "id": "i7",
          "text": "repeat"
        },
        {
          "id": "i8",
          "text": "minmax"
        },
        {
          "id": "i9",
          "text": "grid-auto-flow"
        },
        {
          "id": "i10",
          "text": "grid-template-rows"
        },
        {
          "id": "i11",
          "text": "grid-template-columns"
        },
        {
          "id": "i12",
          "text": "grid-template-areas"
        },
        {
          "id": "i13",
          "text": "gap"
        },
        {
          "id": "i14",
          "text": "padding"
        },
        {
          "id": "i15",
          "text": "margin"
        },
        {
          "id": "i16",
          "text": "border-spacing"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i13",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "web-282",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "You are managing a group of buttons with the class \"action-btn\".\nYou need to attach an event listener to all buttons to invoke the \"processData\" function\nwhen clicked.\nYour code must ensure the event is handled during the bubbling phase.\n\nComplete the markup by selecting the correct option from each drop-down list.\n<script>\nvar buttons = document.querySelectorAll(\".action-btn\");\n\nfor (var i = 0; i < buttons.length; i++) {\nvar btn = buttons[i];\nbtn.addEventListener( \n[1]\n , \n[2]\n , \n[3]\n );\n}\n</script>",
      "explanation": "The event name is click, the handler is the function reference, and false leaves capture disabled so the listener uses normal target/bubbling behavior.",
      "dragItems": [
        {
          "id": "i1",
          "text": "processData"
        },
        {
          "id": "i2",
          "text": "false"
        },
        {
          "id": "i3",
          "text": "\"click\""
        },
        {
          "id": "i4",
          "text": "false"
        },
        {
          "id": "i5",
          "text": "\"click\""
        },
        {
          "id": "i6",
          "text": "processData"
        },
        {
          "id": "i7",
          "text": "false"
        },
        {
          "id": "i8",
          "text": "true"
        },
        {
          "id": "i9",
          "text": "True"
        },
        {
          "id": "i10",
          "text": "False"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i7",
          "optionIds": [
            "i7",
            "i8",
            "i9",
            "i10"
          ]
        }
      ]
    },
    {
      "id": "web-283",
      "chapter": "javascript",
      "type": "single",
      "question": "You are working with the Web Storage API.\nWhat specific information is assigned to the variable 'entryCount' after executing the\nfollowing line of JavaScript code?\n\nvar entryCount = localStorage.length;",
      "explanation": "Storage.length reports how many key/value pairs the storage object currently contains, not their byte size.",
      "options": [
        "The total number of key/value pairs currently stored.",
        "The maximum storage capacity in bytes.",
        "The number of characters in the stored data.",
        "The expiration time of the local storage session."
      ],
      "correct": 0
    },
    {
      "id": "web-284",
      "chapter": "graphics",
      "type": "single",
      "question": "Which markup segment correctly creates an SVG ellipse?",
      "explanation": "An SVG ellipse uses cx and cy for its center and rx and ry for its radii inside an svg container.",
      "options": [
        "<svg><ellipse x=\"150\" y=\"100\" rx=\"80\" ry=\"40\" /></svg>",
        "<svg height=\"200\" width=\"400\"><ellipse cx=\"150\" cy=\"100\" rx=\"80\" ry=\"40\" fill=\"purple\" /></svg>",
        "<svg><ellipse cx=\"150\" cy=\"100\" x=\"80\" y=\"40\" /></svg>",
        "<svg><ellipse x=\"150\" y=\"100\" width=\"80\" height=\"40\" /></svg>"
      ],
      "correct": 1
    },
    {
      "id": "web-285",
      "chapter": "css-layout",
      "type": "single",
      "question": "You are configuring a CSS Grid container and want to define the layout structure by\nreferencing specific named regions (e.g., \"header\", \"sidebar\", \"content\", \"footer\").\nWhich CSS property allows you to create this visual map of grid areas?",
      "explanation": "grid-template-areas defines a two-dimensional map of named grid areas; grid-area assigns an individual item to an area.",
      "options": [
        "grid-template-areas",
        "grid-area",
        "grid-definition",
        "grid-map"
      ],
      "correct": 0
    },
    {
      "id": "web-286",
      "chapter": "css-effects",
      "type": "single",
      "question": "You are writing the CSS for an animation.\nReview the following code snippet:\n\n@keyframes slideDown {\n/* Missing code here */\n100% {\ntop: 300px;\n}\n}\n\nYou need to animate the object so that it moves down the screen from a starting position\nof 50 pixels.\nWhich CSS code segment should you insert at the beginning of the keyframes rule?",
      "explanation": "The 0% keyframe sets the initial top offset to 50px before the animation reaches 300px. The element must be positioned for top to affect its layout.",
      "options": [
        "0% { top: 50px; }",
        "50% { top: 150px; }",
        "100% { top: 50px; }",
        "0% { top: 0px; }"
      ],
      "correct": 0
    },
    {
      "id": "web-287",
      "chapter": "css-layout",
      "type": "single",
      "question": "You are creating a responsive web page design.\nYou need the background image to automatically scale to fill the entire container area,\neven if it means cropping part of the image.\n\nWhich CSS property value should you use?",
      "explanation": "cover preserves the image's aspect ratio while filling the container, cropping excess content if necessary.",
      "options": [
        "background-size: cover;",
        "background-size: contain;",
        "background-size: auto;",
        "background-size: 1200px;"
      ],
      "correct": 0
    },
    {
      "id": "web-288",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "You need to draw a red square that meets these conditions:\n- It is 300 by 300 pixels.\n- It contains a yellow circle that is centered within the square.\n- The circle has a 60-pixel radius.\n- The image must scale without distortion when the page is resized.\n\nComplete the code by selecting the correct option from each drop down list.\n\n\n[1]\n\n\n[2]\n fill=\"red\" />\n\n[3]\n fill=\"yellow\" />\n\n[4]",
      "explanation": "A square viewBox preserves scalable coordinates, rect draws the red square, and the centered circle uses half the square's width and height as its center.",
      "dragItems": [
        {
          "id": "i1",
          "text": "<svg viewBox=\"0 0 300 300\" width=\"300\" height=\"300\">"
        },
        {
          "id": "i2",
          "text": "</svg viewBox=\"0 0 300 300\" width=\"300\" height=\"300\">"
        },
        {
          "id": "i3",
          "text": "<input>"
        },
        {
          "id": "i4",
          "text": "<option>"
        },
        {
          "id": "i5",
          "text": "</rect x=\"0\" y=\"0\" width=\"300\" height=\"300\""
        },
        {
          "id": "i6",
          "text": "<input>"
        },
        {
          "id": "i7",
          "text": "<option>"
        },
        {
          "id": "i8",
          "text": "<rect x=\"0\" y=\"0\" width=\"300\" height=\"300\""
        },
        {
          "id": "i9",
          "text": "<input>"
        },
        {
          "id": "i10",
          "text": "<option>"
        },
        {
          "id": "i11",
          "text": "<circle cx=\"150\" cy=\"150\" r=\"60\""
        },
        {
          "id": "i12",
          "text": "</circle cx=\"150\" cy=\"150\" r=\"60\""
        },
        {
          "id": "i13",
          "text": "</option>"
        },
        {
          "id": "i14",
          "text": "</svg>"
        },
        {
          "id": "i15",
          "text": "<svg>"
        },
        {
          "id": "i16",
          "text": "</input>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i14",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "web-289",
      "chapter": "javascript",
      "type": "single",
      "question": "You are writing a JavaScript validation function for a user registration page.\nWhen the user clicks the \"Sign Up\" button, your script detects that the \"Password\" and\n\"Confirm Password\" fields do not match.\n\nYou need to stop the browser from submitting the form so the user can correct the\nmistake without the page reloading.\nWhich method of the event object should you call?",
      "explanation": "preventDefault cancels normal submission so the user can fix invalid data. It should run from a cancelable submission event handler.",
      "options": [
        "preventDefault()",
        "stopPropagation()",
        "stopImmediatePropagation()",
        "return true"
      ],
      "correct": 0
    },
    {
      "id": "web-290",
      "chapter": "graphics",
      "type": "dropdown",
      "question": "You are developing a weather application.\nYou need to retrieve the user's current geographic location to display the local\nforecast.\nThe code must first check if the browser supports geolocation, and then request the\ncurrent position once.\n\nComplete the code by selecting the correct option from each drop-down list.\n\nif ( \n[1]\n ) {\n\n[2]\n . \n[3]\n ;\n}\n\nfunction showWeather(position) {\nconsole.log(\"Lat: \" + position.coords.latitude);\n}",
      "explanation": "Feature detection checks geolocation, and getCurrentPosition requests one result and invokes the callback after a successful permitted lookup.",
      "dragItems": [
        {
          "id": "i1",
          "text": "navigator.geolocation()"
        },
        {
          "id": "i2",
          "text": "navigator.geolocation = None"
        },
        {
          "id": "i3",
          "text": "navigator.geolocation"
        },
        {
          "id": "i4",
          "text": "navigator::geolocation"
        },
        {
          "id": "i5",
          "text": "navigator.geolocation = None"
        },
        {
          "id": "i6",
          "text": "navigator.geolocation"
        },
        {
          "id": "i7",
          "text": "navigator::geolocation"
        },
        {
          "id": "i8",
          "text": "navigator.geolocation()"
        },
        {
          "id": "i9",
          "text": "getCurrentPosition(showWeather)"
        },
        {
          "id": "i10",
          "text": "getCurrentPosition[showWeather]"
        },
        {
          "id": "i11",
          "text": "getCurrentPosition()"
        },
        {
          "id": "i12",
          "text": "getCurrentPosition(\"showWeather\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "web-291",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "The following form is used for shipping details but is missing validation attributes:\nform\nlabel for=\"address\" Delivery Address /label\ninput type=\"text\" id=\"address\" name=\"address\"\n\nlabel for=\"zip\" Zip Code /label\ninput type=\"text\" id=\"zip\" name=\"zip\" placeholder=\"12345\"\n\nlabel for=\"tracking\" Tracking Code /label\ninput type=\"text\" id=\"tracking\" name=\"tracking\" placeholder=\"AA-123456\"\n/form\n\nYou need to update the form to enforce the following requirements:\n1. All fields must be completed with valid information before submission.\n2. The user should not be allowed to type more than 5 characters into the Zip Code\nfield.\n3. The Tracking Code must strictly follow the configuration of the placeholder text\nusing a regular expression.\n\nComplete the sentences by selecting the correct option from each drop-down list.\n\nThe required attribute is needed for \n[1]\n of the input elements.\nThe Zip Code field requires the \n[2]\n attribute.\nA completed pattern attribute is needed for the \n[3]\n field.",
      "explanation": "required belongs on each mandatory input, maxlength limits ZIP entry length, and pattern can constrain the Tracking Code format.",
      "dragItems": [
        {
          "id": "i1",
          "text": "none"
        },
        {
          "id": "i2",
          "text": "all three"
        },
        {
          "id": "i3",
          "text": "only the first"
        },
        {
          "id": "i4",
          "text": "only the second"
        },
        {
          "id": "i5",
          "text": "maxlength"
        },
        {
          "id": "i6",
          "text": "minlength"
        },
        {
          "id": "i7",
          "text": "pattern"
        },
        {
          "id": "i8",
          "text": "placeholder"
        },
        {
          "id": "i9",
          "text": "all three"
        },
        {
          "id": "i10",
          "text": "maxlength"
        },
        {
          "id": "i11",
          "text": "Tracking Code"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11"
          ]
        }
      ]
    },
    {
      "id": "web-292",
      "chapter": "javascript",
      "type": "multiple",
      "question": "You are designing a digital kiosk interface for a touch-screen display.\nDuring testing, you notice that users often have to tap several times before a button\nclick is registered, and sometimes the wrong action is triggered.\n\nWhat are two possible causes for this behavior? (Select 2)",
      "explanation": "Undersized targets and overlays intercepting pointer input can produce missed or incorrect taps. Mouse click handlers are normally synthesized for touch and are not inherently invalid.",
      "options": [
        "The touch target areas are too small for reliable finger input.",
        "The input elements overlap with other transparent containers.",
        "The screen resolution is higher than the CSS viewport width.",
        "The device is using a mouse event listener instead of a touch listener."
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "web-293",
      "chapter": "javascript",
      "type": "single",
      "question": "Which constructor initializes the public displayName property so that the following code works?",
      "explanation": "A constructor invoked with new initializes instance properties through this. This exposes displayName as a public property rather than making it private.",
      "options": [
        "function Employee(first, last) { this.first = first; this.last = last; this.displayName = this.first + \" \" + this.last; }",
        "function Employee(first, last) { first = first; last = last; displayName = first + \" \" + last; }",
        "var Employee(first, last) { this.first = first; this.last = last; this.displayName = this.first + \" \" + this.last; }",
        "Employee = { first: \"\", last: \"\", displayName: first + \" \" + last }"
      ],
      "correct": 0,
      "code": "worker = new Employee(\"Alice\", \"Smith\");\nconsole.log(worker.displayName + \" has been registered.\");"
    },
    {
      "id": "web-294",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You are building a newsletter subscription form.\nYou need to organize the HTML segments in the correct order to ensure the form is valid\nand properly structured with a fieldset and a legend.",
      "explanation": "The form contains a fieldset whose first child is its legend; controls follow before the fieldset and form closing tags.",
      "dragItems": [
        {
          "id": "i1",
          "text": "<legend>"
        },
        {
          "id": "i2",
          "text": "</legend>"
        },
        {
          "id": "i3",
          "text": "<form>"
        },
        {
          "id": "i4",
          "text": "<fieldset>"
        },
        {
          "id": "i5",
          "text": "</fieldset>"
        },
        {
          "id": "i6",
          "text": "<fieldset>"
        },
        {
          "id": "i7",
          "text": "<legend>"
        },
        {
          "id": "i8",
          "text": "</legend>"
        },
        {
          "id": "i9",
          "text": "<legend>Newsletter</legend>"
        },
        {
          "id": "i10",
          "text": "</legend>Newsletter</legend>"
        },
        {
          "id": "i11",
          "text": "<input>"
        },
        {
          "id": "i12",
          "text": "<option>"
        },
        {
          "id": "i13",
          "text": "<fieldset>"
        },
        {
          "id": "i14",
          "text": "<legend>"
        },
        {
          "id": "i15",
          "text": "</legend>"
        },
        {
          "id": "i16",
          "text": "</fieldset>"
        },
        {
          "id": "i17",
          "text": "<legend>"
        },
        {
          "id": "i18",
          "text": "</legend>"
        },
        {
          "id": "i19",
          "text": "</form>"
        },
        {
          "id": "i20",
          "text": "<fieldset>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i16",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i19",
          "optionIds": [
            "i17",
            "i18",
            "i19",
            "i20"
          ]
        }
      ],
      "code": "[1]\n  [2]\n    [3]\n    <input type=\"email\" name=\"email\" required>\n    <button type=\"submit\">Subscribe</button>\n  [4]\n[5]"
    },
    {
      "id": "web-295",
      "chapter": "javascript",
      "type": "multiple",
      "question": "You are developing a responsive news portal that must adapt its layout for smartphones,\ntablets, and desktops.\nYou decide to use CSS media queries to handle the styling transitions.\n\nWhich two statements accurately describe the role of media queries? (Select 2)",
      "explanation": "Media queries conditionally apply CSS based on media features and support responsive design. They do not execute JavaScript or minify server assets.",
      "options": [
        "Media queries are a core component for implementing responsive web design.",
        "Media queries allow you to apply specific CSS rules based on screen dimensions or device characteristics.",
        "Media queries are used to detect and execute JavaScript functions based on the user's hardware.",
        "Media queries automatically optimize the performance of the web server by minifying assets."
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "web-296",
      "chapter": "javascript",
      "type": "multiple",
      "question": "You are developing a multi-step booking system for a travel website.\nYou need to store data that remains available as the user moves between the flight\nselection and the payment page, but this data should be cleared automatically once the\nbrowser tab is closed.\n\nWhich two features should be implemented using sessionStorage? (Select 2)",
      "explanation": "sessionStorage suits temporary same-tab booking state and nonsecret transaction identifiers. Persistent preferences and customer records need different storage; authentication secrets should not be stored here.",
      "options": [
        "Temporarily holding selected flight details between checkout steps.",
        "Storing a unique session identifier for the current transaction.",
        "Saving the user's preferred currency for all future visits.",
        "Maintaining a permanent record of the user's frequent flyer number."
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "web-297",
      "chapter": "css-layout",
      "type": "single",
      "question": "You are designing a blog layout. You have an image element that is floating to the right\nof the text.\nYou need to ensure that the \"Read More\" section starts on a new line below the image and\nis not allowed to wrap around it.\n\nWhich CSS property should you apply to the \"Read More\" section to achieve this?",
      "explanation": "clear: right or clear: both prevents the section from sitting beside the earlier right float.",
      "options": [
        "clear",
        "float",
        "overflow",
        "z-index"
      ],
      "correct": 0
    },
    {
      "id": "web-298",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "You are developing a search feature for a shopping application.\nYou need to provide a list of suggested categories as the user types into the search\nbox.",
      "explanation": "The datalist id must match the input's list attribute to associate suggestions with the input.",
      "dragItems": [
        {
          "id": "i1",
          "text": "<option"
        },
        {
          "id": "i2",
          "text": "<datalist"
        },
        {
          "id": "i3",
          "text": "<select"
        },
        {
          "id": "i4",
          "text": "<optgroup"
        },
        {
          "id": "i5",
          "text": "</datalist>"
        },
        {
          "id": "i6",
          "text": "<datalist"
        },
        {
          "id": "i7",
          "text": "categories"
        },
        {
          "id": "i8",
          "text": "<fieldset>"
        },
        {
          "id": "i9",
          "text": "<legend>"
        },
        {
          "id": "i10",
          "text": "</legend>"
        },
        {
          "id": "i11",
          "text": "</datalist>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i8",
            "i9",
            "i10",
            "i11"
          ]
        }
      ],
      "code": "<input list=\"categories\" id=\"category-search\">\n[1] id=\"[2]\">\n  <option value=\"Electronics\">\n  <option value=\"Clothing\">\n[3]"
    },
    {
      "id": "web-299",
      "chapter": "graphics",
      "type": "single",
      "question": "Which code segment correctly displays images with 60% transparency and a green 12px\nshadow?",
      "explanation": "60% transparency means 40% opacity. drop-shadow is a filter function, whereas box-shadow is a separate CSS property.",
      "options": [
        "img { filter: opacity(40%) box-shadow(12px 12px green); }",
        "img { filter: saturate(40%) drop-shadow(12px 12px green); }",
        "img { filter: opacity(40%) drop-shadow(12px 12px green); }",
        "img { filter: saturate(60%) box-shadow(12px 12px green); }"
      ],
      "correct": 2
    },
    {
      "id": "web-300",
      "chapter": "css-layout",
      "type": "single",
      "question": "You need to ensure an element remains in the normal document flow, appearing exactly\nafter the preceding element without any custom offsets. Which CSS position value should\nbe applied?",
      "explanation": "static positioning retains ordinary document flow and does not apply top/left offsets.",
      "options": [
        "relative",
        "static",
        "absolute",
        "fixed"
      ],
      "correct": 1
    },
    {
      "id": "web-301",
      "chapter": "graphics",
      "type": "single",
      "question": "You are using a flexbox container for a messaging app where you want the newest messages\nto appear at the very top of a vertical stack without manually setting the order\nproperty. Which value for flex-direction should you use?",
      "explanation": "With messages appended in chronological DOM order, column-reverse reverses the visual vertical order. Visual order changes do not reorder the DOM for assistive technologies.",
      "options": [
        "row-reverse",
        "column-reverse",
        "column",
        "row"
      ],
      "correct": 1
    },
    {
      "id": "web-302",
      "chapter": "html-forms",
      "type": "dropdown",
      "question": "Complete CSS that applies grayscale, then 40% brightness, then an 8px blur to images. These effects are not access control or encryption.",
      "explanation": "The img selector and filter property apply the requested grayscale, brightness, and blur effects in sequence. CSS filters are visual effects, not a security mechanism.",
      "dragItems": [
        {
          "id": "i1",
          "text": "blur(8px)"
        },
        {
          "id": "i2",
          "text": "img"
        },
        {
          "id": "i3",
          "text": "filter"
        },
        {
          "id": "i4",
          "text": "grayscale(100%)"
        },
        {
          "id": "i5",
          "text": "brightness(40%)"
        },
        {
          "id": "i6",
          "text": "transform"
        },
        {
          "id": "i7",
          "text": "transition"
        },
        {
          "id": "i8",
          "text": "animation"
        },
        {
          "id": "i9",
          "text": "filter"
        },
        {
          "id": "i10",
          "text": "grayscale()"
        },
        {
          "id": "i11",
          "text": "grayscale(\"100%\")"
        },
        {
          "id": "i12",
          "text": "grayscale(100%)"
        },
        {
          "id": "i13",
          "text": "grayscale[100%]"
        },
        {
          "id": "i14",
          "text": "brightness(\"40%\")"
        },
        {
          "id": "i15",
          "text": "brightness(40%)"
        },
        {
          "id": "i16",
          "text": "brightness[40%]"
        },
        {
          "id": "i17",
          "text": "brightness()"
        },
        {
          "id": "i18",
          "text": "blur(8px)"
        },
        {
          "id": "i19",
          "text": "blur[8px]"
        },
        {
          "id": "i20",
          "text": "blur()"
        },
        {
          "id": "i21",
          "text": "blur(\"8px\")"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4",
            "i5"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i9",
          "optionIds": [
            "i6",
            "i7",
            "i8",
            "i9"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i10",
            "i11",
            "i12",
            "i13"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i15",
          "optionIds": [
            "i14",
            "i15",
            "i16",
            "i17"
          ]
        },
        {
          "id": "z5",
          "label": "Blank [5]",
          "correctItemId": "i18",
          "optionIds": [
            "i18",
            "i19",
            "i20",
            "i21"
          ]
        }
      ],
      "code": "[1] { [2]: [3] [4] [5]; }"
    },
    {
      "id": "web-303",
      "chapter": "html-forms",
      "type": "single",
      "question": "You are creating a form that asks a user to enter an employee ID. The form must be\nsubmitted only if the field is not empty and matches the following format:\nAA-111-BBBB\n\nWhich markup should you use to create the input element?",
      "explanation": "required prevents an empty value and pattern constrains the whole nonempty input to two letters, three digits, and four letters with hyphens.",
      "options": [
        "<input type=\"text\" name=\"id\" pattern=\"[A-Z]{2}-[0-9]{3}-[A-Z]{4}\" required>",
        "<input type=\"text\" name=\"id\" maxlength=\"11\" required>",
        "<input type=\"text\" name=\"id\" pattern=\"[A-Z]{2}-[0-9]{3}-[A-Z]{4}\">",
        "<input type=\"text\" name=\"id\" pattern=\"[A]{2}-[1]{3}-[B]{4}\" required>"
      ],
      "correct": 0
    },
    {
      "id": "web-304",
      "chapter": "javascript",
      "type": "dropdown",
      "question": "You are writing a script to fetch weather data from a local JSON file. Complete the\nasynchronous request code by selecting the correct snippets for each gap.\n\n<script>\n\n[1]\n\nxhr.onload = function() {\n\n[2]\n\nvar display = '';\nfor (var i = 0; i < \n[3]\n; i++) {\ndisplay += '<p>' + responseObject.weather[i].Status + '</p>';\n}\ndocument.getElementById('weather-box').innerHTML = display;\n};\nxhr.open('GET', 'data.json', true);\nxhr.send(null);\n</script>",
      "explanation": "Create the request object, parse its JSON response after load, and iterate over the weather array. Production code should also handle HTTP and parsing failures.",
      "dragItems": [
        {
          "id": "i1",
          "text": "responseObject.weather.length"
        },
        {
          "id": "i2",
          "text": "var xhr = new XMLHttpRequest();"
        },
        {
          "id": "i3",
          "text": "var responseObject = JSON.parse(xhr.responseText);"
        },
        {
          "id": "i4",
          "text": "var xhr = new XMLHttpRequest();"
        },
        {
          "id": "i5",
          "text": "var responseObject = JSON.parse(xhr.responseText);"
        },
        {
          "id": "i6",
          "text": "responseObject.weather.length"
        },
        {
          "id": "i7",
          "text": "var responseObject = JSON.parse(xhr.responseText);"
        },
        {
          "id": "i8",
          "text": "responseObject.weather.length"
        },
        {
          "id": "i9",
          "text": "var xhr = new XMLHttpRequest();"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8",
          "optionIds": [
            "i7",
            "i8",
            "i9"
          ]
        }
      ]
    }
  ]
};
