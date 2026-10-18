const selectionBoard = document.querySelector(".selection-board");
const frontend = document.querySelectorAll(".frontend");
const frontendBtn = document.querySelector(".frontend-button");
const senior = document.querySelectorAll(".senior");
const seniorBtn = document.querySelector(".senior-button");
const junior = document.querySelectorAll(".junior");
const juniorBtn = document.querySelector(".junior-button");
const html = document.querySelectorAll(".html");
const htmlBtn = document.querySelector(".html-button");
const css = document.querySelectorAll(".css");
const cssBtn = document.querySelector(".css-button");
const javascript = document.querySelectorAll(".javascript");
const javascriptBtn = document.querySelector(".javascript-button");
const fullstack = document.querySelectorAll(".fullstack");
const fullstackBtn = document.querySelector(".fullstack-button");
const midweight = document.querySelectorAll(".midweight");
const midweightBtn = document.querySelector(".midweight-button");
const python = document.querySelectorAll(".python");
const pythonBtn = document.querySelector(".python-button");
const react = document.querySelectorAll(".react");
const reactBtn = document.querySelector(".react-button");
const sass = document.querySelectorAll(".sass");
const sassBtn = document.querySelector(".sass-button");
const ruby = document.querySelectorAll(".ruby");
const rubyBtn = document.querySelector(".ruby-button");
const ror = document.querySelectorAll(".ror");
const rorBtn = document.querySelector(".ror-button");
const backend = document.querySelectorAll(".backend");
const backendBtn = document.querySelector(".backend-button");
const vue = document.querySelectorAll(".vue");
const vueBtn = document.querySelector(".vue-button");
const django = document.querySelectorAll(".django");
const djangoBtn = document.querySelector(".django-button");

// 1. Target all the job posting cards on your page instead of the board filters
const jobCards = document.querySelectorAll(".container, .container.border");

selectionBoard.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const clickedTagButton = e.target.parentElement;
        clickedTagButton.style.display = 'none';

        const activeFilters = Array.from(selectionBoard.children).filter(child => {
            return child.tagName === 'DIV' && child.style.display !== 'none';
        });

        if (activeFilters.length === 0) {
            selectionBoard.style.display = "none";
            jobCards.forEach(card => {
                card.style.display = "flex";
            });
        }
    }
});

frontend.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasFrontendTag = card.querySelector('.frontend');
            
            if (!hasFrontendTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        frontendBtn.style.display = "flex";
    });
});
senior.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasSeniorTag = card.querySelector('.senior');
            
            if (!hasSeniorTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        seniorBtn.style.display = "flex";
    });
});
junior.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasJuniorTag = card.querySelector('.junior');
            
            if (!hasJuniorTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        juniorBtn.style.display = "flex";
    });
});
html.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasHtmlTag = card.querySelector('.html');
            
            if (!hasHtmlTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        htmlBtn.style.display = "flex";
    });
});
css.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasCssTag = card.querySelector('.css');
            
            if (!hasCssTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        cssBtn.style.display = "flex";
    });
});
javascript.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasJavascriptTag = card.querySelector('.javascript');
            
            if (!hasJavascriptTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        javascriptBtn.style.display = "flex";
    });
});
fullstack.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasFullstackTag = card.querySelector('.fullstack');
            
            if (!hasFullstackTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        fullstackBtn.style.display = "flex";
    });
});
midweight.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasMidweightTag = card.querySelector('.midweight');
            
            if (!hasMidweightTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        midweightBtn.style.display = "flex";
    });
});
python.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasPythonTag = card.querySelector('.python');
            
            if (!hasPythonTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        pythonBtn.style.display = "flex";
    });
});
react.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasReactTag = card.querySelector('.react');
            
            if (!hasReactTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        reactBtn.style.display = "flex";
    });
});
sass.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasSeniorTag = card.querySelector('.sass');
            
            if (!hasSeniorTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        sassBtn.style.display = "flex";
    });
});
ruby.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasRubyTag = card.querySelector('.ruby');
            
            if (!hasRubyTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        rubyBtn.style.display = "flex";
    });
});
ror.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasRoRTag = card.querySelector('.ror');
            
            if (!hasRoRTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        rorBtn.style.display = "flex";
    });
});
backend.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasBackendTag = card.querySelector('.backend');
            
            if (!hasBackendTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        backendBtn.style.display = "flex";
    });
});
vue.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasVueTag = card.querySelector('.vue');
            
            if (!hasVueTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        vueBtn.style.display = "flex";
    });
});
django.forEach(element => {
    element.addEventListener("click", () => {
        jobCards.forEach(card => {
            const hasDjangoTag = card.querySelector('.django');
            
            if (!hasDjangoTag) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });

        selectionBoard.style.display = "flex";
        djangoBtn.style.display = "flex";
    });
});
const filterSelect = [
    { class: 'frontend', btn: frontendBtn },
    { class: 'senior', btn: seniorBtn },
    { class: 'junior', btn: juniorBtn },
    { class: 'html', btn: htmlBtn },
    { class: 'css', btn: cssBtn },
    { class: 'javascript', btn: javascriptBtn },
    { class: 'fullstack', btn: fullstackBtn },
    { class: 'midweight', btn: midweightBtn },
    { class: 'python', btn: pythonBtn },
    { class: 'react', btn: reactBtn },
    { class: 'sass', btn: sassBtn },
    { class: 'ruby', btn: rubyBtn },
    { class: 'ror', btn: rorBtn },
    { class: 'backend', btn: backendBtn },
    { class: 'vue', btn: vueBtn },
    { class: 'django', btn: djangoBtn }
];

function checkActiveCombinations() {
    const activeFilters = [];
    filterSelect.forEach(item => {
        if (item.btn && item.btn.style.display === 'flex') {
            activeFilters.push(item.class);
        }
    });
    if (activeFilters.length === 0) {
        selectionBoard.style.display = "none";
        jobCards.forEach(card => card.style.display = "flex");
        return;
    }
    jobCards.forEach(card => {
        const matchesCombo = activeFilters.every(filterClass => {
            return card.querySelector(`.tags .${filterClass}`) !== null;
        });

        if (matchesCombo) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}
filterSelect.forEach(item => {
    const targetTags = document.querySelectorAll(`.tags .${item.class}`);
    
    targetTags.forEach(tagElement => {
        tagElement.addEventListener("click", () => {
            selectionBoard.style.display = "flex";
            if (item.btn) item.btn.style.display = "flex";
        });
    });
});

selectionBoard.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const parentFilterDiv = e.target.closest('div');
        
        if (parentFilterDiv && !parentFilterDiv.classList.contains('clear-btn')) {
            parentFilterDiv.style.display = 'none';
            checkActiveCombinations();
        }
    }
});