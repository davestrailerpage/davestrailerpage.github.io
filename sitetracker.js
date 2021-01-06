/* -----------------------------------------------
   PIPEX Site Tracker - v.1.6
   www.dsl.pipex.com
  ------------------------------------------------ */

//SETTINGS:
//enter your username you received from scripts.dsl.pipex.net
  id="assc22"
//you don't need to edit anything below this line
//-------------------------------------------------

if(showme==null) var showme='n'        // default showme value
if(st==null)     var st='js'           // default st (show-type) value

s=0;c=0
f=""+escape(top.document.referrer) // 'top.' is used to track referers in frames
sw=screen.width;sh=screen.height;s=sw+"x"+sh
v=navigator.appName
if (v != "Netscape") c=screen.colorDepth
else c=screen.pixelDepth

r="?id="+id+"&referer="+f+"&r="+s+"&c="+c+"&showme="+showme+"&st="+st

if (st=='js') { // calling Site Tracker by JavaScript-tag
	if (v != "Microsoft Internet Explorer") {
		r = r+"&url="+document.URL // $HTTP_REFERER problem with NS,...
	}
	document.open()
	document.write("<script language='JavaScript' src='http://scripts.dsl.pipex.net/sitetracker/sitetracker.php"+r+"'></script>")
	document.close()
} else { // calling Site Tracker by IMG-tag
	rand=Math.round(1000*Math.random())
	r = r+"&b="+rand  //force the page to load the IMG
	document.open()
	document.write("<IMG src='http://scripts.dsl.pipex.net/sitetracker/sitetracker.php"+r+"'>")
	document.close()
}