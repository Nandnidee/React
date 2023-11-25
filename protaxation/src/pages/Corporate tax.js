import { Link } from "react-router-dom";
import Contact from "./Contact";
export default function Tax(){
    return(
        <>
        <p className="main-head">Corporate Tax</p>
        <hr/>
        <p className="subtext">Protaxation specializes in small business corporate tax- both regular “C” corporations and “S” corporations.
        <br/><br/>
We understand the values, aims, and objectives of closely held private small businesses and we have developed strategies to help them meet and implement those values, aims and objectives. Tax minimization is our ultimate concern and we will help you devise strategies to meet that most important objective. Whether the issues involve flow through entities, netting out corporate profits to zero, avoiding double taxation both at the corporate and shareholder level or avoiding US social security taxes on distributions versus those of salary, taking care of closely held private small businesses and their shareholders is a specialty of ours.
<br/><br/>
We specialize in business tax election filing statuses as related to Limited Liability Companies (LLC’s) in addition to our Accounting Business Management Services.
<br/><br/>
Protaxation can advise you as to the applicable tax laws and regulations and we will consult with you on the preparation of your US tax return Form 1120 and 1120S and shareholder k-1’s and any required State tax filings. In addition, we can help your shareholders with the preparation of their Individual tax returns Form 1040.
<br/><br/>
We are dedicated to educating our professional and intelligent clients, who desire to be kept aware as to US tax laws affecting the amount of US income tax they will pay as well as developing and constantly changing new US tax law.
<br/><br/>
We invest the time and resources to meet with our clients as often as required to ensure optimum tax savings mechanisms are in place.
<br/><br/>
We have excellent articles on this website that will help explain the above in more detail your high net worth filing positions.
<br/><br/>
Please <Link to={'/Contact'} style={{color:'#164863',fontWeight:'900'}}>contact us </Link>for a free consultation and for further details.<br/><br/></p>
        </>
    );
}