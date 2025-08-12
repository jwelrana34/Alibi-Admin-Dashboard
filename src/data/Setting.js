export const logs = [
  {
    timestamp: "Aug 5, 2025 12:38 pm",
    user: "Mira Al-Sayfani",
    action: "Updated Settings",
    ip: "192.168.1.10",
  },
  {
    timestamp: "Aug 6, 2025 11:36 pm",
    user: "Salma Dahrani",
    action: "Updated Settings",
    ip: "192.168.1.10",
  },
  {
    timestamp: "Aug 7, 2025 10:25 pm",
    user: "Yousef Barqani",
    action: "Updated Settings",
    ip: "192.168.1.10",
  },
  {
    timestamp: "Aug 8, 2025 12:31 pm",
    user: "Noor Khandari",
    action: "Updated Settings",
    ip: "192.168.1.10",
  },
];

export const roles = [
  {
    role: "Administrator",
    permissions: [
      "Add/Edit/Delete Users",
      "Assign Roles",
      "View/Edit/Delete Report",
      "Edit System Settings",
      "Access API (Full)",
      "View/Export Audit Logs",
      "Change Deployment Mode & Data Retention",
    ],
    key: "admin",
  },
  {
    role: "Supervisor",
    permissions: [
      "View/Edit Reports",
      "Manage Assigned Team Members",
      "View Audit Logs (Read Only)",
      "Export Data (CSV/PDF)",
      "Access Evidence Files",
    ],
    key: "supervisor",
  },
  {
    role: "User",
    permissions: ["View Reports & Charts", "Read Only Access (No Edit/Export)"],
    key: "user",
  },
];
