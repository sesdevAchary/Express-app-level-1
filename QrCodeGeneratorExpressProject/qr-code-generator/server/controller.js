const service = require('./service');

exports.generateQr=async(req,res)=>{
    try{
        const{data}=req.body;

        const qrCodeText=service.formatdata(data);

        const qrCodeBuffer=awaitservice.genetateQrcode(qrCodeText)

       
		res.setHeader('Content-Disposition', 'attachment; filename=qrcode.png');
		res.type('image/png').send(qrCodeBuffer);
	} catch (err){
        console,log("error generating qe code")
        res.status(400).send(err.message);

    }

};