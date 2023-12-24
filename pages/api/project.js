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
    if (req.query?.id) {
      res.json(await Projects.findOne({ _id: req.query.id }));
    } else {
      res.json(await Projects.find());
    }
  }
}
