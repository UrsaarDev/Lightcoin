import request from "../../lib/fetch";
import { GeneralData } from "../../interfaces"


const GetGeneralData = () => {
  return request("https://api.clucoin.com/v1/data/", {})
    .then((data) => {
        const generalData: GeneralData = data.data;
        return generalData;
    })
    .catch((err: any) => {
      console.log("ERR: Querying");
    });
}

export default  GetGeneralData
