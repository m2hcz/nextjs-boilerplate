const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const webhookPattern=/^https:\/\/discord(?:app)?\.com\/api\/webhooks\/\d+\/[\w-]+$/;
export async function POST(request: Request){
  const hook=process.env.DISCORD_WEBHOOK_URL;
  if(!hook || !webhookPattern.test(hook)) return Response.json({message:"Contact form is temporarily unavailable."},{status:503});
  try{
    const data=await request.json() as Record<string,unknown>;
    const clean=(key:string,limit=900)=>typeof data[key]==="string"?(data[key] as string).trim().slice(0,limit):"";
    const name=clean("name",120),email=clean("email",254),type=clean("type",100),details=clean("details",3700);
    if(!name || !type || !details || !emailPattern.test(email))return Response.json({message:"Please complete the required fields."},{status:400});
    const response=await fetch(hook,{method:"POST",headers:{"Content-Type":"application/json"},
     body:JSON.stringify({allowed_mentions:{parse:[]},embeds:[{title:"Atlantic Interactive — New contact request",description:details,fields:[{name:"Name",value:name},{name:"Email",value:email},{name:"Request type",value:type},{name:"Studio",value:clean("company",200)||"Not provided"}],color:3137791}]}),
     signal:AbortSignal.timeout(9000)});
    if(!response.ok) return Response.json({message:"Unable to deliver your request."},{status:502});
    return Response.json({ok:true});
  }catch{
    return Response.json({message:"Unable to send request."},{status:502});
  }
}
