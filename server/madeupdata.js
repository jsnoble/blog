/**
 * Created by jared on 10/2/14.
 */

if (Posts.find().count() === 0) {
  Posts.insert ({"title" : "in quam fringilla rhoncus mauris enim leo rhoncus sed" , "tags" : "morbi a ipsum integer" , "content" : "ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque" , "url" : "https://yellowbook.com/erat/curabitur/gravida/nisi.aspx?erat=at&curabitur=feugiat&gravida=non&nisi=pretium&at=quis&nibh=lectus&in=suspendisse&hac=potenti&habitasse=in&platea=eleifend&dictumst=quam&aliquam=a&augue=odio&quam=in&sollicitudin=hac&vitae=habitasse&consectetuer=platea&eget=dictumst&rutrum=maecenas&at=ut&lorem=massa&integer=quis&tincidunt=augue&ante=luctus&vel=tincidunt&ipsum=nulla&praesent=mollis&blandit=molestie&lacinia=lorem&erat=quisque&vestibulum=ut&sed=erat&magna=curabitur&at=gravida&nunc=nisi&commodo=at&placerat=nibh&praesent=in&blandit=hac&nam=habitasse&nulla=platea&integer=dictumst&pede=aliquam&justo=augue&lacinia=quam&eget=sollicitudin" , "author" : "Jason"});

  Posts.insert ({"title" : "mattis egestas metus aenean fermentum donec ut mauris" , "tags" : "mollis molestie lorem quisque ut erat curabitur gravida nisi at" , "content" : "est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel" , "url" : "https://yale.edu/rutrum/at/lorem/integer/tincidunt/ante/vel.jsp?luctus=fusce&cum=congue&sociis=diam&natoque=id&penatibus=ornare&et=imperdiet&magnis=sapien&dis=urna&parturient=pretium&montes=nisl&nascetur=ut&ridiculus=volutpat&mus=sapien&vivamus=arcu&vestibulum=sed&sagittis=augue&sapien=aliquam&cum=erat" , "author" : "Eugene"});

  Posts.insert ({"title" : "eu orci mauris lacinia sapien quis libero" , "tags" : "faucibus cursus urna ut" , "content" : "maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam" , "url" : "http://kickstarter.com/eget.jpg?montes=ut&nascetur=nulla&ridiculus=sed&mus=accumsan" , "author" : "Matthew"});

  Posts.insert ({"title" : "mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit" , "tags" : "vitae quam suspendisse potenti nullam" , "content" : "vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula" , "url" : "http://unblog.fr/integer/pede/justo/lacinia.aspx?a=magna&nibh=vulputate&in=luctus&quis=cum&justo=sociis&maecenas=natoque&rhoncus=penatibus&aliquam=et&lacus=magnis&morbi=dis&quis=parturient&tortor=montes&id=nascetur&nulla=ridiculus&ultrices=mus" , "author" : "Brian"});

  Posts.insert ({"title" : "ut ultrices" , "tags" : "semper est quam pharetra magna ac consequat metus sapien ut" , "content" : "potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et" , "url" : "http://craigslist.org/tempus/vel/pede/morbi.json?id=justo&ligula=morbi&suspendisse=ut&ornare=odio&consequat=cras&lectus=mi&in=pede&est=malesuada&risus=in&auctor=imperdiet&sed=et&tristique=commodo&in=vulputate&tempus=justo&sit=in&amet=blandit&sem=ultrices&fusce=enim&consequat=lorem&nulla=ipsum&nisl=dolor&nunc=sit&nisl=amet&duis=consectetuer&bibendum=adipiscing&felis=elit&sed=proin&interdum=interdum&venenatis=mauris&turpis=non&enim=ligula&blandit=pellentesque" , "author" : "Walter"});

  Posts.insert ({"title" : "adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus" , "tags" : "bibendum imperdiet nullam orci pede" , "content" : "nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in" , "url" : "http://latimes.com/augue/vestibulum.json?tortor=sed&id=lacus&nulla=morbi&ultrices=sem&aliquet=mauris&maecenas=laoreet&leo=ut&odio=rhoncus&condimentum=aliquet&id=pulvinar&luctus=sed&nec=nisl&molestie=nunc&sed=rhoncus&justo=dui&pellentesque=vel&viverra=sem&pede=sed&ac=sagittis&diam=nam&cras=congue&pellentesque=risus&volutpat=semper&dui=porta&maecenas=volutpat&tristique=quam&est=pede&et=lobortis&tempus=ligula&semper=sit&est=amet&quam=eleifend&pharetra=pede&magna=libero&ac=quis&consequat=orci&metus=nullam&sapien=molestie&ut=nibh&nunc=in&vestibulum=lectus&ante=pellentesque&ipsum=at&primis=nulla&in=suspendisse&faucibus=potenti&orci=cras&luctus=in&et=purus&ultrices=eu&posuere=magna&cubilia=vulputate&curae=luctus&mauris=cum&viverra=sociis&diam=natoque&vitae=penatibus&quam=et&suspendisse=magnis&potenti=dis&nullam=parturient&porttitor=montes&lacus=nascetur&at=ridiculus&turpis=mus&donec=vivamus&posuere=vestibulum&metus=sagittis&vitae=sapien&ipsum=cum&aliquam=sociis&non=natoque&mauris=penatibus&morbi=et&non=magnis&lectus=dis&aliquam=parturient&sit=montes&amet=nascetur&diam=ridiculus&in=mus&magna=etiam&bibendum=vel&imperdiet=augue&nullam=vestibulum&orci=rutrum&pede=rutrum&venenatis=neque&non=aenean&sodales=auctor&sed=gravida" , "author" : "Jeffrey"});

  Posts.insert ({"title" : "dolor morbi" , "tags" : "velit eu est congue" , "content" : "a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel" , "url" : "http://freewebs.com/adipiscing/molestie.html?sapien=in&cursus=leo&vestibulum=maecenas&proin=pulvinar&eu=lobortis&mi=est&nulla=phasellus&ac=sit&enim=amet&in=erat&tempor=nulla&turpis=tempus&nec=vivamus&euismod=in&scelerisque=felis&quam=eu&turpis=sapien&adipiscing=cursus&lorem=vestibulum&vitae=proin&mattis=eu&nibh=mi&ligula=nulla&nec=ac&sem=enim&duis=in&aliquam=tempor&convallis=turpis&nunc=nec&proin=euismod&at=scelerisque&turpis=quam&a=turpis&pede=adipiscing&posuere=lorem&nonummy=vitae&integer=mattis&non=nibh&velit=ligula&donec=nec&diam=sem&neque=duis&vestibulum=aliquam&eget=convallis&vulputate=nunc&ut=proin&ultrices=at&vel=turpis&augue=a&vestibulum=pede&ante=posuere&ipsum=nonummy&primis=integer&in=non&faucibus=velit&orci=donec&luctus=diam&et=neque&ultrices=vestibulum&posuere=eget&cubilia=vulputate&curae=ut&donec=ultrices&pharetra=vel&magna=augue&vestibulum=vestibulum&aliquet=ante" , "author" : "Walter"});

  Posts.insert ({"title" : "convallis tortor risus" , "tags" : "tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed" , "content" : "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel" , "url" : "http://youku.com/venenatis.js?massa=quam&id=a&lobortis=odio&convallis=in&tortor=hac&risus=habitasse&dapibus=platea&augue=dictumst&vel=maecenas&accumsan=ut&tellus=massa&nisi=quis&eu=augue&orci=luctus&mauris=tincidunt&lacinia=nulla&sapien=mollis&quis=molestie&libero=lorem&nullam=quisque&sit=ut&amet=erat&turpis=curabitur&elementum=gravida&ligula=nisi&vehicula=at&consequat=nibh&morbi=in&a=hac&ipsum=habitasse&integer=platea&a=dictumst&nibh=aliquam&in=augue&quis=quam&justo=sollicitudin&maecenas=vitae&rhoncus=consectetuer" , "author" : "Howard"});

  Posts.insert ({"title" : "proin risus praesent lectus vestibulum quam sapien" , "tags" : "molestie hendrerit at vulputate" , "content" : "in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus" , "url" : "https://posterous.com/donec/posuere/metus.aspx?vel=risus&sem=praesent&sed=lectus&sagittis=vestibulum&nam=quam&congue=sapien&risus=varius&semper=ut&porta=blandit&volutpat=non&quam=interdum&pede=in&lobortis=ante&ligula=vestibulum&sit=ante&amet=ipsum&eleifend=primis&pede=in&libero=faucibus&quis=orci&orci=luctus&nullam=et&molestie=ultrices&nibh=posuere&in=cubilia&lectus=curae&pellentesque=duis&at=faucibus&nulla=accumsan&suspendisse=odio&potenti=curabitur&cras=convallis&in=duis&purus=consequat&eu=dui&magna=nec&vulputate=nisi&luctus=volutpat&cum=eleifend&sociis=donec&natoque=ut&penatibus=dolor&et=morbi&magnis=vel&dis=lectus&parturient=in&montes=quam&nascetur=fringilla&ridiculus=rhoncus&mus=mauris" , "author" : "Douglas"});

  Posts.insert ({"title" : "neque aenean" , "tags" : "lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem" , "content" : "in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper" , "url" : "https://archive.org/consequat.js?mauris=metus&sit=sapien&amet=ut&eros=nunc&suspendisse=vestibulum&accumsan=ante&tortor=ipsum&quis=primis&turpis=in&sed=faucibus&ante=orci&vivamus=luctus&tortor=et&duis=ultrices&mattis=posuere&egestas=cubilia&metus=curae&aenean=mauris&fermentum=viverra&donec=diam&ut=vitae&mauris=quam&eget=suspendisse&massa=potenti&tempor=nullam&convallis=porttitor&nulla=lacus&neque=at" , "author" : "Wayne"});
}