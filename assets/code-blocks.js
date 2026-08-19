console.log("lksjfdlskjfd");
document.querySelectorAll('pre:has(> code)').forEach((element) => {
    console.log("element:", element);
    // HACK: Assumes the code element only has one class, which is the language extension
    const ext = element.querySelector(':scope > code').className;
    element.dataset.ext = ext;
    element.classList.add(`language-${ext}`);
});
