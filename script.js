/* =========================================================================
   QUESTION BANK — immutable source of truth. Stable IDs, never array index.
   ========================================================================= */
const QUESTION_BANK = [
  {
    id: "q1",
    topic: "Limits",
    text: "Evaluate $$\\lim_{x\\to0}\\frac{e^{\\sin x}-1-x}{x^2}.$$",
    options: ["$-\\dfrac12$", "$0$", "$\\dfrac12$", "$1$"],
    correct: 2,
  },

  {
    id: "q2",
    topic: "Limits",
    text: "Evaluate $$\\lim_{x\\to0}\\frac{\\ln(1+x)-x+\\frac{x^2}{2}}{x^3}.$$",
    options: ["$-\\dfrac13$", "$\\dfrac13$", "$-\\dfrac16$", "$\\dfrac16$"],
    correct: 1,
  },

  {
    id: "q3",
    topic: "Limits",
    text: "Evaluate $$\\lim_{x\\to0}\\frac{\\sin x-x+\\frac{x^3}{6}}{x^5}.$$",
    options: [
      "$\\dfrac1{120}$",
      "$-\\dfrac1{120}$",
      "$\\dfrac1{24}$",
      "$-\\dfrac1{24}$",
    ],
    correct: 0,
  },

  {
    id: "q4",
    topic: "Differentiability",
    text: "Which statement is necessarily true if $f$ is differentiable at $a$?",
    options: [
      "$f'(a)=0$",
      "$f$ has a local extremum at $a$",
      "$f$ is continuous at $a$",
      "$f$ is twice differentiable at $a$",
    ],
    correct: 2,
  },

  {
    id: "q5",
    topic: "Limits",
    text: "Evaluate $$\\lim_{x\\to0}\\frac{e^x-\\cos x-x-\\frac{x^2}{2}}{x^3}.$$",
    options: ["$\\dfrac16$", "$-\\dfrac16$", "$\\dfrac13$", "$0$"],
    correct: 0,
  },

  {
    id: "q6",
    topic: "Limits",
    text: "Evaluate $$\\lim_{x\\to0}\\frac{\\tan x-x-\\frac{x^3}{3}}{x^5}.$$",
    options: [
      "$\\dfrac{2}{15}$",
      "$\\dfrac{1}{15}$",
      "$\\dfrac{4}{15}$",
      "$-\\dfrac{2}{15}$",
    ],
    correct: 0,
  },

  {
    id: "q7",
    topic: "Continuity",
    sharedDef:
      "f(x)=\\begin{cases}\\dfrac{\\sin(3x)-3x}{x^3},&x\\ne0,\\\\[4pt]k,&x=0.\\end{cases}",
    text: "Let $$f(x)=\\begin{cases}\\dfrac{\\sin(3x)-3x}{x^3},&x\\ne0,\\\\[4pt]k,&x=0.\\end{cases}$$ For which $k$ is $f$ continuous at $0$?",
    options: ["$-\\dfrac92$", "$-\\dfrac32$", "$\\dfrac32$", "$\\dfrac92$"],
    correct: 0,
  },

  {
    id: "q8",
    topic: "Limits",
    text: "Determine $$\\lim_{x\\to0}\\frac{\\ln(\\cos x)+\\frac{x^2}{2}}{x^4}.$$",
    options: [
      "$-\\dfrac1{12}$",
      "$\\dfrac1{12}$",
      "$-\\dfrac14$",
      "$\\dfrac14$",
    ],
    correct: 0,
  },

  {
    id: "q9",
    topic: "Continuity",
    text: "Let $$f(x)=\\begin{cases}\\dfrac{x^2-4}{|x-2|},&x\\ne2,\\\\3,&x=2.\\end{cases}$$ Which type of discontinuity does $f$ have at $x=2$?",
    options: ["Removable", "Jump", "Infinite", "None"],
    correct: 1,
  },

  {
    id: "q10",
    topic: "Continuity",
    text: "Let $$f(x)=\\begin{cases}x+1,&x<1,\\\\ax^2+b,&x\\ge1.\\end{cases}$$ If $f$ is continuous at $x=1$ and $f(0)=1$, what is $a+b$?",
    options: ["$0$", "$1$", "$2$", "$3$"],
    correct: 2,
  },

  {
    id: "q11",
    topic: "Differentiability",
    sharedDef:
      "f(x)=\\begin{cases}x^2\\sin(1/x),&x\\ne0,\\\\0,&x=0.\\end{cases}",
    text: "Let $$f(x)=\\begin{cases}x^2\\sin(1/x),&x\\ne0,\\\\0,&x=0.\\end{cases}$$ Which statement is correct?",
    options: [
      "$f$ is discontinuous but differentiable at $0$",
      "$f$ is continuous and differentiable at $0$",
      "$f$ is continuous but not differentiable at $0$",
      "$f$ is neither continuous nor differentiable at $0$",
    ],
    correct: 1,
  },

  {
    id: "q12",
    topic: "Differentiability",
    refId: "q11",
    textTemplate: "Let $${{REF}}$$ Evaluate $f'(0)$.",
    options: ["Does not exist", "$0$", "$1$", "$-1$"],
    correct: 1,
  },

  {
    id: "q13",
    topic: "Fermat's Theorem",
    text: "Suppose $f$ is differentiable on $(a,b)$, and $f'(c)=0$ for some $c\\in(a,b)$. Which conclusion follows from Fermat's theorem?",
    options: [
      "$c$ must be a local maximum",
      "$c$ must be a local minimum",
      "$c$ must be a local extremum",
      "No local-extremum conclusion necessarily follows",
    ],
    correct: 3,
  },

  {
    id: "q14",
    topic: "Critical Points",
    text: "Find all critical points of $$f(x)=x^4-4x^3+4x^2.$$ Which of the following is the complete set?",
    options: ["$x=0,1$", "$x=0,2$", "$x=1,2$", "$x=0,1,2$"],
    correct: 3,
  },

  {
    id: "q15",
    topic: "MVT",
    text: "Let $$f(x)=x^3-3x^2+2$$ on $[0,3]$. The value $c\\in(0,3)$ guaranteed by the Mean Value Theorem satisfies $$f'(c)=\\frac{f(3)-f(0)}{3}.$$ Find $c$.",
    options: ["$1-\\sqrt2$", "$1+\\sqrt2$", "$1+\\sqrt3$", "$2$"],
    correct: 3,
  },

  {
    id: "q16",
    topic: "MVT",
    text: "Let $$f(x)=\\ln x$$ on $[1,e^2]$. Find the point $c$ guaranteed by the MVT.",
    options: [
      "$c=\\dfrac{e^2-1}{2}$",
      "$c=\\dfrac{e^2+1}{2}$",
      "$c=\\dfrac{e^2-1}{2e}$",
      "$c=\\sqrt{\\dfrac{e^2-1}{2}}$",
    ],
    correct: 0,
  },

  {
    id: "q17",
    topic: "EVT",
    text: "Determine the absolute maximum and minimum of $$f(x)=x^3-6x^2+9x+1$$ on $[0,4]$.",
    options: [
      "Maximum $5$, minimum $1$",
      "Maximum $5$, minimum $-3$",
      "Maximum $9$, minimum $1$",
      "Maximum $9$, minimum $-3$",
    ],
    correct: 0,
  },

  {
    id: "q18",
    topic: "EVT",
    text: "For $$f(x)=\\frac{x}{x^2+1},$$ determine the absolute maximum and minimum on $[-2,3]$.",
    options: [
      "Maximum $1/2$, minimum $-2/5$",
      "Maximum $1/2$, minimum $-1/2$",
      "Maximum $3/10$, minimum $-2/5$",
      "Maximum $2/5$, minimum $-1/2$",
    ],
    correct: 1,
  },

  {
    id: "q19",
    topic: "Differentiability",
    text: "Find $k$ such that $$f(x)=\\begin{cases}x^2+kx,&x<1,\\\\3x-2,&x\\ge1\\end{cases}$$ is differentiable at $x=1$.",
    options: ["$k=-1$", "$k=0$", "$k=1$", "$k=2$"],
    correct: 2,
  },

  {
    id: "q20",
    topic: "Rolle's Theorem",
    text: "A function $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$. If $f(a)=f(b)$, which theorem guarantees some $c\\in(a,b)$ satisfying $f'(c)=0$?",
    options: [
      "Extreme Value Theorem",
      "Fermat's theorem",
      "Rolle's theorem",
      "Intermediate Value Theorem",
    ],
    correct: 2,
  },

  {
    id: "q21",
    topic: "Partial Derivatives",
    text: "Let $$f(x,y)=x^2e^{xy}+\\ln(x+y).$$ Find $f_x(1,1)$.",
    options: ["$3e+\\dfrac12$", "$2e+\\dfrac12$", "$3e+1$", "$2e+1$"],
    correct: 0,
  },

  {
    id: "q22",
    topic: "Partial Derivatives",
    text: "For $$f(x,y)=\\frac{x^2y}{x+y},$$ find $f_x(1,2)$.",
    options: ["$\\dfrac{10}{9}$", "$\\dfrac79$", "$\\dfrac49$", "$\\dfrac23$"],
    correct: 0,
  },

  {
    id: "q23",
    topic: "Partial Derivatives",
    text: "Let $$f(x,y)=\\sin(xy)+x^2y^3.$$ Evaluate $f_{xy}(0,1)$.",
    options: ["$0$", "$1$", "$2$", "$3$"],
    correct: 1,
  },

  {
    id: "q24",
    topic: "Partial Derivatives",
    text: "If $$f(x,y)=e^{x^2+y^2},$$ which is the correct value of $f_{xy}(1,1)$?",
    options: ["$2e^2$", "$4e^2$", "$8e^2$", "$16e^2$"],
    correct: 1,
  },

  {
    id: "q25",
    topic: "Differentials",
    text: "Let $$z=x^2y+\\ln(xy).$$ If $x=2,\\ y=1$, and $dx=0.03,\\ dy=-0.02$, what is the differential $dz$?",
    options: ["$0.10$", "$0.11$", "$0.12$", "$0.035$"],
    correct: 3,
  },

  {
    id: "q26",
    topic: "Linear Approximation",
    text: "Approximate $$\\sqrt{(4.02)^2+(2.97)^2}$$ using a suitable linearization around $(4,3)$.",
    options: ["$4.92$", "$4.99$", "$5.01$", "$5.02$"],
    correct: 1,
  },

  {
    id: "q27",
    topic: "Linear Approximation",
    text: "Use linear approximation at $(1,2)$ to estimate $$\\frac{(1.03)^2}{2.01}.$$",
    options: ["$0.510$", "$0.525$", "$0.540$", "$0.550$"],
    correct: 1,
  },

  {
    id: "q28",
    topic: "Critical Points",
    text: "The function $$f(x,y)=x^2+y^2-4x-6y$$ has a critical point at $(2,3)$. What is the nature of this critical point?",
    options: [
      "Local maximum",
      "Local minimum",
      "Saddle point",
      "Inflection point",
    ],
    correct: 1,
  },

  {
    id: "q29",
    topic: "Critical Points",
    text: "Find the critical point(s) of $$f(x,y)=x^3+y^3-3xy.$$",
    options: [
      "$(0,0)$ only",
      "$(1,1)$ only",
      "$(0,0)$ and $(1,1)$",
      "$(-1,-1)$ and $(1,1)$",
    ],
    correct: 2,
  },

  {
    id: "q30",
    topic: "Optimization",
    text: "For $$f(x,y)=x^2+4y^2-4x+8y+7,$$ what is the minimum value of $f$?",
    options: ["$-5$", "$-1$", "$0$", "$3$"],
    correct: 1,
  },

  {
    id: "q31",
    topic: "Lagrange Multipliers",
    text: "Find the maximum value of $$f(x,y)=xy$$ subject to $$x^2+y^2=8.$$",
    options: ["$2$", "$4$", "$8$", "$16$"],
    correct: 1,
  },

  {
    id: "q32",
    topic: "Lagrange Multipliers",
    text: "Find the maximum value of $$f(x,y)=x+y$$ subject to $$x^2+4y^2=20.$$",
    options: ["$\\sqrt5$", "$2\\sqrt5$", "$3\\sqrt5$", "$5$"],
    correct: 3,
  },

  {
    id: "q33",
    topic: "Lagrange Multipliers",
    text: "Find the maximum value of $$f(x,y,z)=xyz$$ subject to $$x+y+z=12,\\qquad x,y,z>0.$$",
    options: ["$27$", "$48$", "$64$", "$72$"],
    correct: 2,
  },

  {
    id: "q34",
    topic: "Lagrange Multipliers",
    text: "Find the minimum value of $$f(x,y)=x^2+y^2$$ subject to $$x+2y=6.$$",
    options: [
      "$\\dfrac{18}{5}$",
      "$\\dfrac{36}{5}$",
      "$\\dfrac{36}{4}$",
      "$6$",
    ],
    correct: 1,
  },

  {
    id: "q35",
    topic: "Lagrange Multipliers",
    text: "Find the point on the plane $$x+2y+2z=9$$ closest to the origin.",
    options: [
      "$(1,2,2)$",
      "$(1,4,1)$",
      "$\\left(\\dfrac13,\\dfrac23,\\dfrac23\\right)$",
      "$\\left(\\dfrac95,\\dfrac{18}{5},\\dfrac{18}{5}\\right)$",
    ],
    correct: 0,
  },

  {
    id: "q36",
    topic: "Optimization",
    text: "Find the maximum volume of a rectangular box in the first octant whose vertex opposite the origin lies on $$x+2y+3z=6.$$",
    options: ["$1$", "$\\dfrac{2}{3}$", "$\\dfrac{8}{9}$", "$\\dfrac{4}{3}$"],
    correct: 3,
  },

  {
    id: "q37",
    topic: "Lagrange Multipliers",
    text: "Find the extrema of $$f(x,y)=x^2-y^2$$ subject to $$x^2+y^2=1.$$ Which pair gives the maximum and minimum values?",
    options: ["$1,-1$", "$2,-2$", "$\\dfrac12,-\\dfrac12$", "$0,-1$"],
    correct: 0,
  },

  {
    id: "q38",
    topic: "Lagrange Multipliers",
    text: "Find the minimum value of $$f(x,y)=x^2+2y^2$$ subject to $$xy=1,\\qquad x,y>0.$$",
    options: ["$2$", "$2\\sqrt2$", "$3$", "$4$"],
    correct: 1,
  },

  {
    id: "q39",
    topic: "Linear Approximation",
    text: "For $$f(x,y)=x^2y+e^{xy},$$ find the linearization at $(1,0)$.",
    options: [
      "$L(x,y)=1+2y$",
      "$L(x,y)=1+2(x-1)+2y$",
      "$L(x,y)=1+2(x-1)+y$",
      "$L(x,y)=1+(x-1)+y$",
    ],
    correct: 0,
  },

  {
    id: "q40",
    topic: "Partial Derivatives",
    sharedDef:
      "f(x,y)=\\begin{cases}\\dfrac{x^3y}{x^2+y^2},&(x,y)\\ne(0,0),\\\\0,&(x,y)=(0,0).\\end{cases}",
    text: "Let $$f(x,y)=\\begin{cases}\\dfrac{x^3y}{x^2+y^2},&(x,y)\\ne(0,0),\\\\0,&(x,y)=(0,0).\\end{cases}$$ What is the value of $f_x(0,0)$?",
    options: ["Does not exist", "$0$", "$1$", "$-1$"],
    correct: 1,
  },

  {
    id: "q41",
    topic: "Partial Derivatives",
    refId: "q40",
    textTemplate:
      "For the function $${{REF}}$$ what is the value of $f_y(0,0)$?",
    options: ["Does not exist", "$0$", "$1$", "$-1$"],
    correct: 1,
  },

  {
    id: "q42",
    topic: "Differentiability",
    text: "Consider $$f(x,y)=\\begin{cases}\\dfrac{x^2y}{x^2+y^2},&(x,y)\\ne(0,0),\\\\0,&(x,y)=(0,0).\\end{cases}$$ Which statement is correct at $(0,0)$?",
    options: [
      "Both partial derivatives exist, and $f$ is differentiable",
      "Both partial derivatives exist, but $f$ is not differentiable",
      "Neither partial derivative exists",
      "$f$ is discontinuous, so no partial derivatives exist",
    ],
    correct: 1,
  },

  {
    id: "q43",
    topic: "Double Integrals",
    text: "Evaluate $$\\int_0^1\\int_x^1 (x+y)\\,dy\\,dx.$$",
    options: ["$\\dfrac12$", "$\\dfrac23$", "$\\dfrac34$", "$1$"],
    correct: 0,
  },

  {
    id: "q44",
    topic: "Double Integrals",
    text: "Evaluate $$\\int_0^1\\int_0^{\\sqrt{1-x^2}}(x^2+y^2)\\,dy\\,dx.$$",
    options: [
      "$\\dfrac{\\pi}{8}$",
      "$\\dfrac{\\pi}{12}$",
      "$\\dfrac{\\pi}{16}$",
      "$\\dfrac14$",
    ],
    correct: 0,
  },

  {
    id: "q45",
    topic: "Fubini",
    text: "Reverse the order of integration and evaluate $$\\int_0^1\\int_{x^2}^{x} e^{y}\\,dy\\,dx.$$",
    options: [
      "$e-\\dfrac32$",
      "$\\dfrac e2-\\dfrac12$",
      "$\\dfrac e2-\\dfrac32$",
      "$e-2$",
    ],
    correct: 1,
  },

  {
    id: "q46",
    topic: "Double Integrals",
    text: "Evaluate $$\\int_0^1\\int_0^{1-x}\\frac{x}{1+y}\\,dy\\,dx.$$",
    options: [
      "$2\\ln2-\\dfrac54$",
      "$\\dfrac12-\\ln2$",
      "$1-\\ln2$",
      "$\\ln2-1$",
    ],
    correct: 0,
  },

  {
    id: "q47",
    topic: "Double Integrals",
    text: "Evaluate $$\\iint_R (x+y)\\,dA,$$ where $$R=\\{(x,y):0\\le x\\le1,\\;x^2\\le y\\le x\\}.$$",
    options: [
      "$\\dfrac{3}{20}$",
      "$\\dfrac14$",
      "$\\dfrac7{20}$",
      "$\\dfrac25$",
    ],
    correct: 0,
  },

  {
    id: "q48",
    topic: "Double Integrals",
    text: "Evaluate $$\\int_0^1\\int_0^{1-y^2} x\\,dx\\,dy.$$",
    options: ["$\\dfrac{4}{15}$", "$\\dfrac13$", "$\\dfrac38$", "$\\dfrac12$"],
    correct: 0,
  },

  {
    id: "q49",
    topic: "EVT",
    text: "Which set of conditions is sufficient for the Extreme Value Theorem to guarantee that $f$ attains both an absolute maximum and an absolute minimum?",
    options: [
      "$f$ is differentiable on an open interval",
      "$f$ is continuous on a closed and bounded interval",
      "$f$ is differentiable on a closed interval",
      "$f$ is bounded on an open interval",
    ],
    correct: 1,
  },

  {
    id: "q50",
    topic: "Differentiability",
    text: "Which statement correctly characterizes differentiability of a function $f:\\mathbb R^2\\to\\mathbb R$ at $(a,b)$?",
    options: [
      "Both partial derivatives must exist at $(a,b)$",
      "The partial derivatives must exist and be continuous everywhere",
      "The function must admit a linear approximation whose error is negligible relative to the distance from $(a,b)$",
      "The function must have zero partial derivatives at $(a,b)$",
    ],
    correct: 2,
  },
];

const TOTAL_Q = QUESTION_BANK.length;
const DURATION_SEC = 33 * 60;
const LS_KEY = "calc3_assessment_v1";

/* =========================================================================
   Helpers
   ========================================================================= */
function fisherYates(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function resolveText(q, bankById) {
  if (q.refId) {
    const src = bankById[q.refId];
    const ref = src.sharedDef || src.text;
    return q.textTemplate.replace("{{REF}}", ref);
  }
  return q.text;
}

function renderMath(el) {
  if (window.renderMathInElement) {
    renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }
}

function fmtTime(sec) {
  sec = Math.max(0, Math.ceil(sec));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return m + ":" + String(s).padStart(2, "0");
}

function saveState() {
  try {
    localStorage.setItem(
      LS_KEY,
      JSON.stringify({
        status: state.status,
        order: state.order,
        optionOrder: state.optionOrder,
        answers: state.answers,
        current: state.current,
        score: state.score,
        streak: state.streak,
        longestStreak: state.longestStreak,
        milestonesHit: state.milestonesHit,
        startTime: state.startTime,
        endTimestamp: state.endTimestamp,
        finishedAt: state.finishedAt,
      }),
    );
  } catch (e) {
    /* storage unavailable — proceed without persistence */
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function clearState() {
  try {
    localStorage.removeItem(LS_KEY);
  } catch (e) {}
}

/* =========================================================================
   State
   ========================================================================= */
const bankById = {};
QUESTION_BANK.forEach((q) => (bankById[q.id] = q));

let state = {
  status: "start", // start | active | finished
  order: [], // array of question ids, shuffled
  optionOrder: {}, // qid -> array of original option indices, shuffled
  answers: {}, // qid -> {selected: displayedIndex, correct: bool}
  current: 0,
  score: 0,
  streak: 0,
  longestStreak: 0,
  milestonesHit: {},
  startTime: null,
  endTimestamp: null,
  finishedAt: null,
  timerHandle: null,
  paletteOpen: true,
  reviewFilter: "all",
};

function initNewAssessment() {
  state.order = fisherYates(QUESTION_BANK.map((q) => q.id));
  state.optionOrder = {};
  state.order.forEach((id) => {
    state.optionOrder[id] = fisherYates([0, 1, 2, 3]);
  });
  state.answers = {};
  state.current = 0;
  state.score = 0;
  state.streak = 0;
  state.longestStreak = 0;
  state.milestonesHit = {};
  state.startTime = Date.now();
  state.endTimestamp = Date.now() + DURATION_SEC * 1000;
  state.finishedAt = null;
  state.status = "active";
  saveState();
}

function resumeFromSaved(saved) {
  Object.assign(state, saved);
  state.timerHandle = null;
}

/* =========================================================================
   Timer
   ========================================================================= */
function startTimerLoop() {
  stopTimerLoop();
  state.timerHandle = setInterval(() => {
    if (state.status !== "active") return;
    const remaining = (state.endTimestamp - Date.now()) / 1000;
    updateTimerDisplay(remaining);
    if (remaining <= 0) {
      finishAssessment(true);
    }
  }, 250);
}
function stopTimerLoop() {
  if (state.timerHandle) {
    clearInterval(state.timerHandle);
    state.timerHandle = null;
  }
}
function updateTimerDisplay(remaining) {
  const el = document.getElementById("timerVal");
  if (!el) return;
  el.textContent = fmtTime(remaining);
  const wrap = document.getElementById("timerWrap");
  if (wrap) {
    if (remaining <= 60) wrap.classList.add("low");
    else wrap.classList.remove("low");
  }
}

/* =========================================================================
   Actions
   ========================================================================= */
function startAssessment() {
  initNewAssessment();
  render();
  startTimerLoop();
}

function selectAnswer(qid, displayedIdx) {
  if (state.answers[qid]) return; // already answered — no repeated submission
  const q = bankById[qid];
  const orig = state.optionOrder[qid][displayedIdx];
  const isCorrect = orig === q.correct;
  state.answers[qid] = { selected: displayedIdx, correct: isCorrect };
  if (isCorrect) {
    state.score++;
    state.streak++;
    if (state.streak > state.longestStreak) state.longestStreak = state.streak;
  } else {
    state.streak = 0;
  }
  saveState();
  render();
  if (isCorrect) {
    checkMilestone(state.streak);
  }
}

function checkMilestone(streak) {
  const milestones = [10, 20, 30, 40, 50];
  if (milestones.includes(streak) && !state.milestonesHit[streak]) {
    state.milestonesHit[streak] = true;
    saveState();
    const big = streak === 10;
    fireConfetti(big);
    showMilestoneToast(streak);
  }
}

function fireConfetti(big) {
  if (typeof confetti !== "function") return;
  const scale = big ? 1 : 0.55;
  confetti({
    particleCount: big ? 140 : 60,
    spread: big ? 80 : 60,
    startVelocity: 45 * scale + 20,
    origin: { y: 0.6 },
    colors: ["#1c6dd0", "#2f83e8", "#1a8f5c", "#ffb648"],
  });
  if (big) {
    setTimeout(
      () =>
        confetti({
          particleCount: 80,
          spread: 100,
          origin: { y: 0.5 },
          colors: ["#1c6dd0", "#ffb648", "#1a8f5c"],
        }),
      250,
    );
  }
}

function showMilestoneToast(streak) {
  const t = document.createElement("div");
  t.className = "milestone-toast";
  t.setAttribute("role", "status");
  t.textContent = "🔥 " + streak + " STREAK!";
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2300);
}

function goTo(idx) {
  if (idx < 0 || idx >= TOTAL_Q) return;
  state.current = idx;
  saveState();
  render();
}

function finishAssessment(auto) {
  if (state.status === "finished") return;
  state.status = "finished";
  state.finishedAt = Date.now();
  stopTimerLoop();
  saveState();
  render();
}

function restartAssessment() {
  clearState();
  state = {
    status: "start",
    order: [],
    optionOrder: {},
    answers: {},
    current: 0,
    score: 0,
    streak: 0,
    longestStreak: 0,
    milestonesHit: {},
    startTime: null,
    endTimestamp: null,
    finishedAt: null,
    timerHandle: null,
    paletteOpen: true,
    reviewFilter: "all",
  };
  render();
}

/* =========================================================================
   Rendering
   ========================================================================= */
const app = document.getElementById("app");

function render() {
  if (state.status === "start") {
    renderStart();
  } else if (state.status === "active") {
    renderQuiz();
  } else {
    renderResults();
  }
}

function renderStart() {
  app.innerHTML = `
    <div class="card start-hero">
      <div class="start-badge">📐 Calculus III · Assessment Platform</div>
      <h1 class="start-title serif">Calculus III <span>Challenge</span></h1>
      <p class="start-sub">50 Questions &nbsp;·&nbsp; 33 Minutes</p>
      <div class="feature-grid">
        <div class="feature"><div class="ico">🔀</div><div><h4>Randomized every run</h4><p>Question order and answer choices are freshly shuffled each time you start.</p></div></div>
        <div class="feature"><div class="ico">⚡</div><div><h4>Instant feedback</h4><p>See immediately whether each answer is correct, with clear visual and text cues.</p></div></div>
        <div class="feature"><div class="ico">⏱️</div><div><h4>33-minute countdown</h4><p>The timer starts the moment you begin and auto-submits at zero.</p></div></div>
        <div class="feature"><div class="ico">🔥</div><div><h4>Streak celebrations</h4><p>String together 10 correct answers in a row to trigger a confetti moment.</p></div></div>
      </div>
      <div class="topics">
        <h3>Topics covered</h3>
        <div class="topic-pills">
          <span class="pill">Limits &amp; indeterminate forms</span>
          <span class="pill">Continuity &amp; differentiability</span>
          <span class="pill">MVT · Rolle's · EVT · Fermat's</span>
          <span class="pill">Partial derivatives</span>
          <span class="pill">Differentials &amp; linear approximation</span>
          <span class="pill">Lagrange multipliers</span>
          <span class="pill">Optimization</span>
          <span class="pill">Double integrals &amp; Fubini</span>
        </div>
      </div>
      <button class="btn btn-primary" style="font-size:16px;padding:15px 38px;" id="startBtn">Start Assessment →</button>
    </div>
  `;
  document
    .getElementById("startBtn")
    .addEventListener("click", startAssessment);
}

function statusOf(qid) {
  const a = state.answers[qid];
  if (!a) return "unanswered";
  return a.correct ? "correct" : "incorrect";
}

function renderPalette() {
  const nodes = state.order
    .map((qid, i) => {
      const st = statusOf(qid);
      const cls = ["pnode", "clickable"];
      if (st === "correct") cls.push("correct");
      if (st === "incorrect") cls.push("incorrect");
      if (i === state.current) cls.push("current");
      return `<button class="${cls.join(" ")}" data-idx="${i}" aria-label="Question ${i + 1}, ${st}" title="Question ${i + 1} — ${st}">${i + 1}</button>`;
    })
    .join("");
  return `<div class="palette-wrap">
    <button class="palette-toggle" id="paletteToggle" aria-expanded="${state.paletteOpen}">${state.paletteOpen ? "▾ Hide question map" : "▸ Show question map"}</button>
    ${state.paletteOpen ? `<div class="palette">${nodes}</div>` : ""}
  </div>`;
}

function renderQuiz() {
  const qid = state.order[state.current];
  const q = bankById[qid];
  const displayOrder = state.optionOrder[qid];
  const answered = state.answers[qid];
  const answeredCount = Object.keys(state.answers).length;
  const remaining = Math.max(0, (state.endTimestamp - Date.now()) / 1000);

  const optionsHtml = displayOrder
    .map((origIdx, dispIdx) => {
      const letter = String.fromCharCode(65 + dispIdx);
      let cls = ["option"];
      let icon = "";
      let disabled = answered ? "disabled" : "";
      if (answered) {
        const isSelected = answered.selected === dispIdx;
        const isCorrectOpt = origIdx === q.correct;
        if (isSelected && isCorrectOpt) {
          cls.push("correct");
          icon = '<span class="opt-icon" aria-hidden="true">✅</span>';
        } else if (isSelected && !isCorrectOpt) {
          cls.push("incorrect");
          icon = '<span class="opt-icon" aria-hidden="true">❌</span>';
        } else if (!isSelected && isCorrectOpt) {
          cls.push("reveal-correct");
          icon = '<span class="opt-icon" aria-hidden="true">✅</span>';
        } else {
          cls.push("muted");
        }
      }
      return `<button class="${cls.join(" ")}" data-disp="${dispIdx}" ${disabled} aria-pressed="${answered ? answered.selected === dispIdx : false}">
        <span class="opt-letter">${letter}</span>
        <span class="opt-body">${q.options[origIdx]}</span>
        ${icon}
      </button>`;
    })
    .join("");

  let feedbackHtml = "";
  if (answered) {
    if (answered.correct) {
      feedbackHtml = `<div class="feedback-banner correct" role="status"><span aria-hidden="true">✅</span> Correct!</div>`;
    } else {
      feedbackHtml = `<div class="feedback-banner incorrect" role="status"><span aria-hidden="true">❌</span> Incorrect — the correct answer is highlighted above.</div>`;
    }
  }

  app.innerHTML = `
    <div class="quiz-header">
      <div class="hdr-left">
        <div class="hdr-title">Calculus III Challenge</div>
        <div class="hdr-progress">Question ${state.current + 1} / ${TOTAL_Q} &nbsp;·&nbsp; ${answeredCount} answered</div>
      </div>
      <div class="hdr-center">
        <div class="timer" id="timerWrap"><span id="timerVal">${fmtTime(remaining)}</span></div>
        <div class="timer-label">Time remaining</div>
      </div>
      <div class="hdr-right">
        <div class="score-chip">Score: ${state.score} / ${answeredCount}</div>
      </div>
    </div>

    ${renderPalette()}

    <div class="card qcard">
      <div class="qmeta">
        <span class="qnum">Question ${state.current + 1}</span>
        <span class="qtopic">${q.topic}</span>
      </div>
      <div class="qtext" id="qtext">${resolveText(q, bankById)}</div>
      <div class="options" role="group" aria-label="Answer options">${optionsHtml}</div>
      ${feedbackHtml}
      <div class="qfooter">
        <div class="streak-badge ${state.streak === 0 ? "zero" : ""}">🔥 Streak: ${state.streak}</div>
        <div class="nav-btns">
          <button class="btn btn-ghost" id="prevBtn" ${state.current === 0 ? "disabled" : ""}>← Previous</button>
          ${
            state.current === TOTAL_Q - 1
              ? `<button class="btn btn-primary" id="finishBtn">Finish Assessment</button>`
              : `<button class="btn btn-primary" id="nextBtn">Next →</button>`
          }
        </div>
      </div>
    </div>
    <div style="text-align:center;margin-top:16px;">
      <button class="btn-text" id="submitEarlyBtn">Submit assessment now</button>
    </div>
  `;

  renderMath(document.getElementById("qtext"));
  document.querySelectorAll(".opt-body").forEach((el) => renderMath(el));

  document.querySelectorAll(".option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const d = parseInt(btn.getAttribute("data-disp"), 10);
      selectAnswer(qid, d);
    });
  });
  const prevBtn = document.getElementById("prevBtn");
  if (prevBtn) prevBtn.addEventListener("click", () => goTo(state.current - 1));
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) nextBtn.addEventListener("click", () => goTo(state.current + 1));
  const finishBtn = document.getElementById("finishBtn");
  if (finishBtn)
    finishBtn.addEventListener("click", () => finishAssessment(false));
  const submitEarly = document.getElementById("submitEarlyBtn");
  if (submitEarly)
    submitEarly.addEventListener("click", () => {
      if (
        confirm(
          "Submit the assessment now? You will not be able to change any answers afterward.",
        )
      ) {
        finishAssessment(false);
      }
    });
  const paletteToggle = document.getElementById("paletteToggle");
  if (paletteToggle)
    paletteToggle.addEventListener("click", () => {
      state.paletteOpen = !state.paletteOpen;
      render();
    });
  document.querySelectorAll(".pnode").forEach((btn) => {
    btn.addEventListener("click", () =>
      goTo(parseInt(btn.getAttribute("data-idx"), 10)),
    );
  });

  updateTimerDisplay(remaining);
}

function renderResults() {
  stopTimerLoop();
  const answeredIds = Object.keys(state.answers);
  const correctCount = answeredIds.filter(
    (id) => state.answers[id].correct,
  ).length;
  const incorrectCount = answeredIds.length - correctCount;
  const unanswered = TOTAL_Q - answeredIds.length;
  const pct = Math.round((correctCount / TOTAL_Q) * 100);
  const timeUsedSec = Math.min(
    DURATION_SEC,
    Math.round(((state.finishedAt || Date.now()) - state.startTime) / 1000),
  );
  const timeRemainingSec = Math.max(0, DURATION_SEC - timeUsedSec);

  const filters = [
    { key: "all", label: "All" },
    { key: "correct", label: "Correct" },
    { key: "incorrect", label: "Incorrect" },
    { key: "unanswered", label: "Unanswered" },
  ];
  const filterBar = filters
    .map(
      (f) =>
        `<button class="filter-chip ${state.reviewFilter === f.key ? "active" : ""}" data-filter="${f.key}">${f.label}</button>`,
    )
    .join("");

  const reviewHtml = state.order
    .map((qid, i) => {
      const q = bankById[qid];
      const a = state.answers[qid];
      const st = statusOf(qid);
      if (state.reviewFilter !== "all" && state.reviewFilter !== st) return "";
      const displayOrder = state.optionOrder[qid];
      const optsHtml = displayOrder
        .map((origIdx, dispIdx) => {
          const letter = String.fromCharCode(65 + dispIdx);
          const isCorrectOpt = origIdx === q.correct;
          const isSelected = a && a.selected === dispIdx;
          let cls = "review-opt";
          let tag = "";
          if (isCorrectOpt) {
            cls += " correct";
            tag = '<span class="tag right">Correct answer</span>';
          }
          if (isSelected && !isCorrectOpt) {
            cls += " incorrect";
            tag = '<span class="tag your">Your answer</span>';
          } else if (isSelected && isCorrectOpt) {
            tag = '<span class="tag right">Your answer ✓</span>';
          }
          return `<div class="${cls}"><span class="opt-letter">${letter}</span><span class="opt-body">${q.options[origIdx]}</span>${tag}</div>`;
        })
        .join("");
      const statusLabel =
        st === "correct"
          ? "✅ Correct"
          : st === "incorrect"
            ? "❌ Incorrect"
            : "⬜ Unanswered";
      const statusCls = st;
      return `<div class="card review-item">
      <div class="review-head">
        <span class="review-status ${statusCls}">${statusLabel}</span>
        <span class="qtopic">${q.topic}</span>
        <span style="margin-left:auto;font-size:12.5px;color:var(--ink-soft);font-weight:600;">Q${i + 1}</span>
      </div>
      <div class="review-q qrtext">${resolveText(q, bankById)}</div>
      <div class="review-opts">${optsHtml}</div>
    </div>`;
    })
    .join("");

  app.innerHTML = `
    <div class="card results-hero">
      <div class="results-ring" style="--pct:${pct}">
        <div class="results-ring-inner">
          <div class="pct">${pct}%</div>
          <div class="frac">${correctCount} / ${TOTAL_Q}</div>
        </div>
      </div>
      <h2 class="results-title">Assessment complete</h2>
      <p class="results-sub">${state.finishedAt && state.endTimestamp - state.finishedAt <= 250 ? "Time expired — your assessment was submitted automatically." : "Here’s how you did."}</p>
      <div class="stat-grid">
        <div class="stat"><div class="v">${correctCount}</div><div class="l">Correct</div></div>
        <div class="stat"><div class="v">${incorrectCount}</div><div class="l">Incorrect</div></div>
        <div class="stat"><div class="v">${unanswered}</div><div class="l">Unanswered</div></div>
        <div class="stat"><div class="v">${state.longestStreak}</div><div class="l">Longest streak</div></div>
        <div class="stat"><div class="v">${fmtTime(timeUsedSec)}</div><div class="l">Time used</div></div>
        <div class="stat"><div class="v">${fmtTime(timeRemainingSec)}</div><div class="l">Time remaining</div></div>
        <div class="stat"><div class="v">${TOTAL_Q}</div><div class="l">Total questions</div></div>
        <div class="stat"><div class="v">${pct}%</div><div class="l">Overall score</div></div>
      </div>
      <div class="results-actions">
        <button class="btn btn-primary" id="restartBtn">Start a new assessment</button>
        <button class="btn btn-ghost" id="jumpReviewBtn">Jump to review</button>
      </div>
    </div>

    <div id="reviewAnchor"></div>
    <h3 class="serif" style="margin:30px 4px 0;font-size:20px;">Question review</h3>
    <div class="filter-bar">${filterBar}</div>
    <div class="review-list">${reviewHtml || '<p style="color:var(--ink-soft);padding:20px;">No questions match this filter.</p>'}</div>
  `;

  document.querySelectorAll(".qrtext").forEach((el) => renderMath(el));
  document.querySelectorAll(".opt-body").forEach((el) => renderMath(el));

  document.getElementById("restartBtn").addEventListener("click", () => {
    clearState();
    restartAssessment();
  });
  document.getElementById("jumpReviewBtn").addEventListener("click", () => {
    document
      .querySelector(".review-list")
      .scrollIntoView({ behavior: "smooth" });
  });
  document.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.reviewFilter = btn.getAttribute("data-filter");
      render();
    });
  });
}

/* =========================================================================
   Keyboard navigation (A–D to select, arrows to move between questions)
   ========================================================================= */
document.addEventListener("keydown", (e) => {
  if (state.status !== "active") return;
  const key = e.key.toUpperCase();
  if (["A", "B", "C", "D"].includes(key)) {
    const idx = key.charCodeAt(0) - 65;
    const qid = state.order[state.current];
    if (!state.answers[qid]) selectAnswer(qid, idx);
  } else if (e.key === "ArrowRight") {
    goTo(state.current + 1);
  } else if (e.key === "ArrowLeft") {
    goTo(state.current - 1);
  }
});

/* =========================================================================
   Boot: resume in-progress session if present, else show start screen
   ========================================================================= */
(function boot() {
  const saved = loadState();
  if (
    saved &&
    saved.status &&
    saved.status !== "start" &&
    saved.order &&
    saved.order.length === TOTAL_Q
  ) {
    resumeFromSaved(saved);
    if (state.status === "active") {
      const remaining = (state.endTimestamp - Date.now()) / 1000;
      if (remaining <= 0) {
        finishAssessment(true);
      } else {
        render();
        startTimerLoop();
      }
    } else {
      render();
    }
  } else {
    render();
  }
})();
