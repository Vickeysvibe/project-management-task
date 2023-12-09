import { mongooseConnect } from "@/lib/mongoose";
import { Projects } from "@/models/projects";

export default async function ProjApi(req, res) {
  const { method } = req;
  await mongooseConnect();
  if (method === "POST") {
    const { name, admin, desc, type, members } = req.body;
    const ProjectDoc = await Projects.create({
      name,
      admin,
      desc,
      type,
      members,
    });
    res.json(ProjectDoc);
  }
  if (method === "GET") {
    const projectDoc = await Projects.find();
    res.json(projectDoc);
  }
}
