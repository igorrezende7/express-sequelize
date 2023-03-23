import Contact from "../models/Contact";


class ContactController{
  async index(req, res){
    const data = await Contact.findAll({
      limit:1000
    });
    return res.json(data)

  }
}

export default new ContactController();
