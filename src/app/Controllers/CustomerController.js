import Customer from "../models/Customer";


class CustomerController{
  async index(req, res){
    const data = await Customer.findAll({
      limit:1000
    });
    return res.json(data)

  }
}

export default new CustomerController();
