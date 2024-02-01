// const contactModel = require('../../models/contactModel.js');
// const formidable = require('formidable')

// module.exports.add_contact_data = async (req, res) => {
//     const form = new formidable.IncomingForm();
    
//     form.parse(req, async (err, fields, files) => {
//         if (err) {
//             return res.status(500).json({ errorMessage: 'Error parsing form data' });
//         }

//         const { name, email, subject, message } = fields;

//         try {
//             const contact = await contactModel.create({
//                 name,
//                 email,
//                 subject,
//                 message
//             });

//             return res.status(201).json(contact);
//         } catch (error) {
//             return res.status(500).json({ errorMessage: 'Error saving contact data to MongoDB' });
//         }
//     });
// };



const contactModel = require('../../models/contactModel.js');
const formidable = require('formidable')

module.exports.add_contact_data = async (req, res) => {
    const formDataHandle = formidable({
        multiples: true
    })
    
    formDataHandle.parse(req, async (err, fields, files) => {
        if (!err) {
            // return res.status(500).json({ errorMessage: 'Error parsing form data' });
            const { name, email, subject, message } = fields;


        try {
             await contactModel.create({
                name,
                email,
                subject,
                message
            })

             res.status(201).json({
                successMessage: 'Contact add successfull'
             });
        } catch (error) {
            console.log("This error is come from contactController page "+error.message)
            res.status(500).json({ errorMessage: 'Internal server error' });
        }
    }
    });
};

