const Qrcode= require(qrcode);

exports.formatdata=(data)=>{
    const qrcodeText=`id:${data.id},price:$${data.price}`;
    return qrcodeText;
};

exports.generateqrcode= async(qrcodeText)=>{
    const options = {
        errorCorrectionLevel:'M',
        type:'image/png',
        margin:2
    };
    const qrCodeBuffer= await
    Qrcode.toBuffer(qrcodeText,options);
    return qrCodeBuffer;
};