export default function handler(req, res) {
  const usuarios = [
    { id: 1, nombre: "Ana", rol: "Admin", activo: true },
    { id: 2, nombre: "Luis", rol: "Usuario", activo: false },
    { id: 3, nombre: "María", rol: "Editor", activo: true },
  ];

  res.status(200).json({ data: usuarios });
}
