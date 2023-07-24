// =========================
// == Obsidian: Rich Foot ==
// =========================
if (dv.current().file) {
    // -- backlinks --
    let backlinkList = (dv.current().file.inlinks);
    if (backlinkList.length) dv.el("div", backlinkList, { cls:"footer--backlinks" });

    // -- modified date --
    let fileUpdate = dv.current().file.mday;
    let modified = (fileUpdate.monthLong + " " + fileUpdate.day + ", " + fileUpdate.year);
    dv.el("div", modified, { cls:"footer--modified-date" });

    // -- created date --
    let fileCreated = dv.current().file.cday;
    let created = (fileCreated.monthLong + " " + fileCreated.day + ", " + fileCreated.year);
    dv.el("div", created, { cls:"footer--created-date" });
}
