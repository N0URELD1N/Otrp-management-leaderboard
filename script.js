const admins = [
  { name: "أنور العنزي", username: "a3nz", points: 0, role: "Owner" },

  { name: "عمر الحربي", username: "cvbjt", points: 0, role: "Owner" },

  { name: "عبدالعزيز", username: "cr2_z", points: 0, role: "CEO" },

  { name: "نورالدين", username: "u7a7", points: 0, role: "CEO" },

  { name: "يزن السفياني", username: "p7a7", points: 0, role: "CEO" },

   { name: "أسامه الأسمري", username: "454os", points: 0, role: "Manage" },

    { name: "شفلوت الأسمري", username: "4rvvy", points: 0, role: "Manage" },
  
  { name: "بابلو", username: ".w.v.", points: 0, role: "Manage" },

  { name: "تميم التميمي", username: "8_i3", points: 0, role: "Manage" },


  { name: "معاذ", username: "7zjt", points: 0, role: "Trusted" },

  { name: "ماجد العنزي", username: "brazili8", points: 0, role: "Trusted" },

  { name: "سعد", username: "0il4", points: 0, role: "Director" },

  { name: "حمزة", username: "haha710", points: 0, role: "Assistant" },

  { name: "فيصل", username: "_ii1_", points: 0, role: "Assistant" },

  { name: "أثير", username: "at_h3", points: 0, role: "Assistant" },

  { name: "السبيعي", username: "alghalba503", points: 0, role: "Colonel" },

  { name: "تركي", username: "6g.p", points: 0, role: "Colonel" },

  { name: "زعتر", username: "6ca_", points: 0, role: "Authority" },

  { name: "معن", username: ".zmz.", points: 0, role: "Authority" },

  { name: "يامن", username: "b7a7", points: 0, role: "Authority" },

  { name: "محمد الجهني", username: "_518._", points: 0, role: "Authority" },

  { name: "عبدالرحمن", username: "devwhew", points: 0, role: "Hero" },

  { name: "سيف", username: "s_4h", points: 0, role: "Leader" },

  { name: "عبدالله", username: "i_qtr7", points: 0, role: "Leader" },

  { name: "طنا", username: "_f8v", points: 0, role: "Leader" },

  { name: "صالح", username: "3zcr0", points: 0, role: "Master" },

  { name: "محمد", username: "_8ud", points: 0, role: "Master" },

  { name: "نايف", username: "fpi.1", points: 0, role: "Master" },

  { name: "وسام", username: "0_y2", points: 0, role: "MOD" },

  { name: "نهيان", username: "n7av", points: 0, role: "Responsible" },

  { name: "--", username: "ahmadhawary", points: 0, role: "Helper" },

  { name: "رائد", username: "65_a", points: 0, role: "Junior" },

  { name: "--", username: "arbyd.", points: 0, role: "Staff" },

  { name: "محمد", username: "0.htx", points: 0, role: "New Staff" },

  { name: "--", username: "1z4.", points: 0, role: "New Staff" },

  { name: "محمد", username: "5m_b", points: 0, role: "New Staff" },

];


const roleOrder = ["Owner", "CEO", "Manage", "Trusted", "Director", "Assistant", "Colonel", "Co Colonel", "Authority", "Presiden", "Console", "Hero", "Leader", "Master", "MOD", "Responsible", "Executive", "Head Admin", "Moderator", "super Admin", "Big Admin", "Admin", "Small Admin", "Supervisor", "Support", "General", "Controller", "Modertor", "Big Manager", "Manager", "Small Manager", "Helper", "Junior", "Staff", "New Staff"];



function renderTable(data) {
  const tbody = document.getElementById("leaderboardBody");
  tbody.innerHTML = "";

  const sorted = data.sort((a, b) => {
    const roleA = roleOrder.indexOf(a.role);
    const roleB = roleOrder.indexOf(b.role);
    if (roleA !== roleB) return roleA - roleB;
    return b.points - a.points;
  });

  sorted.forEach(admin => {
    const roleClass = `role-${admin.role}`;
    const row = `
      <tr>
        <td>${admin.name}</td>
        <td>${admin.username}</td>
        <td>${admin.points}</td>
        <td class="${roleClass}">${admin.role}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

function searchAdmin() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filtered = admins.filter(admin =>
    admin.name.toLowerCase().includes(input) ||
    admin.username.toLowerCase().includes(input)
  );
  renderTable(filtered);
}

renderTable(admins);
