import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Header from '../../Components/Header/Header';
import Unorderedlist from 'react-native-unordered-list';
import { ScrollView } from "react-native-gesture-handler";

export default class TermsAndConditions extends React.Component {
  render(){
    let para1 = "These terms and conditions outline the rules and regulations for the use of Confesskaro's Website, located at www.confesskaro.com.";
    let para2 = "By accessing this website we assume you accept these terms and conditions. Do not continue to use Confesskaro if you do not agree to take all of the terms and conditions stated on this page.";
    let para3 = 'The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to the same.';
    let para4 = "We employ the use of cookies. By accessing WebsiteName, you agreed to use cookies in agreement with the MyCompanyName's Privacy Policy.";
    let para5 = "Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.";
    let para6 = "Unless otherwise stated, MyCompanyName and/or its licensors own the intellectual property rights for all material on WebsiteName. All intellectual property rights are reserved. You may access this from WebsiteName for your own personal use subjected to restrictions set in these terms and conditions. You must not:";
    let para7 = "This Agreement shall begin on the date hereof.";
    let para8 = "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. MyCompanyName does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of MyCompanyName, its agents and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, MyCompanyName shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.";
    let para9 = "MyCompanyName reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes a breach of these Terms and Conditions.";
    let para10 = "You warrant and represent that:";
    let para11 = "You hereby grant MyCompanyName a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.";
    let para12 = "The following organizations may link to our Website without prior written approval:";
    let para13 = "These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.";
    let para14 = "We may consider and approve other link requests from the following types of organizations:";
    let para15 = "We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of MyCompanyName; and (d) the link is in the context of general resource information.";
    let para16 = "These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.";
    let para17 = "If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to MyCompanyName. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.";
    let para18 = "Approved organizations may hyperlink to our Website as follows:";
    let para19 = "No use of MyCompanyName's logo or other artwork will be allowed for linking absent a trademark license agreement.";
    let para20 = "Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.";
    let para21 = "We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.";
   
    return (
  <ScrollView >
    <View style={style.main}>
    <Header navigator={this.props.navigation}/>
    <View style={style.body}>
        <Text style={style.textTopHeading}>Terms and Conditions</Text>
        <Text style={style.normalText}>Welcome to Confesskaro!</Text>
        <Text style={style.normalText}>{para1}</Text>
        <Text style={style.normalText}>{para2}</Text>
        <Text style={style.normalText}>{para3}</Text>
        <Text style={style.textHeading}>Cookies</Text>
        <Text style={style.normalText}>{para4}</Text>
        <Text style={style.normalText}>{para5}</Text>
        <Text style={style.textHeading}>License</Text>
        <Text style={style.normalText}>{para6}</Text>
        <ListItems1/>
        <Text style={style.normalText}>{para7}</Text>
        <Text style={style.normalText}>{para8}</Text>
        <Text style={style.normalText}>{para9}</Text>
        <Text style={style.normalText}>{para10}</Text>   
        <ListItems2/>     
        <Text style={style.normalText}>{para11}</Text>
        <Text style={style.textHeading}>Hyperlinking to our Content</Text>   
        <Text style={style.normalText}>{para12}</Text>
        <ListItems3/> 
        <Text style={style.normalText}>{para13}</Text>
        <Text style={style.normalText}>{para14}</Text>
        <ListItems4/>
        <Text style={style.normalText}>{para15}</Text>
        <Text style={style.normalText}>{para16}</Text>
        <Text style={style.normalText}>{para17}</Text>
        <Text style={style.normalText}>{para18}</Text>
        <ListItems5/>
        <Text style={style.normalText}>{para19}</Text>
        <Text style={style.textHeading}>iFrames</Text>
        <Text style={style.normalText}>{para20}</Text>
        <Text style={style.textHeading}>Content Liability</Text>
        <Text style={style.normalText}>{para21}</Text>
        
        
        
    </View>
    </View>
  </ScrollView>
);
}


}

function ListItems1(){
  let t1 = "Republish material from WebsiteName";
  let t2 = "Sell, rent or sub-license material from WebsiteName";
  let t3 = "Reproduce, duplicate or copy material from WebsiteName";
  let t4 = "Redistribute content from WebsiteName";

  return(
    <View>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t1}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t2}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t3}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t4}</Text></Unorderedlist>
    </View>
  );
}
function ListItems2(){
  let t1 = "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;";
  let t2 = "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;";
  let t3 = "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy";
  let t4 = "Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.";

  return(
    <View>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t1}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t2}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t3}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t4}</Text></Unorderedlist>
    </View>
  );
}
function ListItems3(){
  let t1 = "Government agencies;";
  let t2 = "Search engines;";
  let t3 = "News organizations;";
  let t4 = "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and";
  let t5 = "Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site."
  return(
    <View>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t1}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t2}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t3}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t4}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t5}</Text></Unorderedlist>
    </View>
  );
}
function ListItems4(){
  let t1 = "commonly-known consumer and/or business information sources;";
  let t2 = "dot.com community sites;";
  let t3 = "associations or other groups representing charities;";
  let t4 = "online directory distributors;";
  let t5 = "internet portals;";
  let t6 = "accounting, law and consulting firms; and";
  let t7 = "educational institutions and trade associations.";

  return(
    <View>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t1}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t2}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t3}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t4}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t5}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t6}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t7}</Text></Unorderedlist>
      
    </View>
  );
}
function ListItems5(){
  let t1 = "By use of our corporate name; or";
  let t2 = "By use of the uniform resource locator being linked to; or";
  let t3 = "By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.";


  return(
    <View>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t1}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t2}</Text></Unorderedlist>
      <Unorderedlist style={style.bullet}><Text style={style.bulletText}>{t3}</Text></Unorderedlist>
    </View>
  );
}

const style = StyleSheet.create({
    main:{
        flex:1,
        flexDirection:'column',
        justifyContent:"center",
        backgroundColor:'#ffffff'
    },
    body:{
        flexDirection:'column',
        justifyContent:"center",
        margin:10,
        padding:10,
        borderColor:"#e0e0e0",
        borderWidth:1,
        borderRadius:4
    },
    textTopHeading:{
        fontSize: 34,
    },
    textHeading:{
        marginTop:15,
        fontSize:24,
    },
    normalText:{
        marginTop:12,
        fontSize:16,
    },
    bullet:{
      marginLeft:15,
      fontSize: 20,
    },
    bulletText:{
      marginTop:5,
      fontSize:16,
    }
})