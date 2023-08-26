function noteMaker(notes) {
    const table = document.getElementById("noteTable");
    table.innerHTML = `
        <colgroup>
            <col style="width: 25%">
            <col style="width: 55%">
            <col style="width: 10%">
            <col style="width: 10%">
        </colgroup>
        <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Added Date</th>
            <th>Actions</th>
        </tr>
    `;

    notes.forEach((note) => {

        const newRow = table.insertRow(table.rows.length);
        newRow.setAttribute('id', note._id);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.innerHTML = note.title;
        cell2.innerHTML = note.content;
        cell3.innerHTML = new Date(note.createdAt).toLocaleDateString();
        cell4.innerHTML = `
            <i id="edit_icon" class="fa-solid fa-pen" style="color: #017e16; cursor: pointer;" onclick="editNote('${note._id}')"></i>
            <i class="fa-solid fa-trash" style="color: #ff0000; cursor: pointer;" onclick="deleteNote('${note._id}')"></i>
        `;
    });
}