const panels = document .querySelectorAll(".panel");

panels .forEach(panel => {
    panel.addEventListener("click," () => {
        removeActiveclasses ()
        panel.classlist.add("active");
    }) 
})