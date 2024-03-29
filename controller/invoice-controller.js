import Invoice from '../models/invoice-model.js'




export const  getInvoices = async(request,response) =>{
    
    try{
        let  invoice =  await Invoice.find();
        response.status(200).json(invoice);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
    
}

export const  addInvoices = async (request,response) =>{
    const invoice = request.body;
    const newInvoice= new Invoice (invoice);

    try{
         await newInvoice.save();
        response.status(201).json(newInvoice);
        console.log("facture ajouté")
    } catch (error){
        response.status(409).json({ message: error.message});   
        console.log("echec d'ajout de la facture")  
    }

}

export const getInvoiceById = async (request, response) => {
    try{
        const invoice = await Invoice.findById(request.params.id);
        response.status(200).json(invoice);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

export const editInvoice = async (request, response) => {
    let invoice = await Invoice.findById(request.params.id);
    invoice = request.body;

    const editInvoice = new Invoice(invoice);
    try{
       
        await Invoice.updateOne({_id: request.params.id}, editInvoice);
        response.status(201).json(editInvoice);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const deleteInvoice = async (request, response) => {
    try{
        await Invoice.deleteOne({_id: request.params.id});
        response.status(201).json("Invoice deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

