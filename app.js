function genPdf(){
	var doc = new jsPDF();
	var coutEntry = 1;
	var pageCount = 1;
	doc.addImage(logoImage, 'JPEG', 5, 5, 30, 30);
	doc.addImage(backImage, 'JPEG', 50, 100, 50, 50);
	doc.setTextColor(255,0,0);
	doc.text("IT LAB Solution", 60, 5);
	doc.setTextColor(0,0,0);
	doc.text("Website, Mobile Software, Other", 50, 15);
	doc.text(pageCount.toString(), 200, 280);


	var gloArr = [];
	gloArr.push({
		name: "id",
		width: 30,
		height: 10
	});
	gloArr.push({
		name: "name",
		width: 40,
		height: 10
	});
	gloArr.push({
		name: "value",
		width: 30,
		height: 10
	});
	var tablePositionX = 20;
	var tablePositionY = 40;
	var tempPositionX = 20;
	var tempPositionY = 40;
	for(let i = 0; i < gloArr.length; i++){ //Writing Header
		doc.rect(tempPositionX, tempPositionY, gloArr[i].width, gloArr[i].height);
		doc.text(gloArr[i].name, tempPositionX + 1, tempPositionY + 7);
		tempPositionX += gloArr[i].width;
	}
	tablePositionY += 10;
	var children = document.querySelector('#tableBody').children;
	for(let i = 0; i < children.length; i++){
		if(coutEntry % 15 === 0){
			tablePositionY = 50;
			tempPositionX = 20;
			doc.addPage();
			doc.addImage(logoImage, 'JPEG', 5, 5, 30, 30);
			doc.addImage(backImage, 'JPEG', 50, 100, 50, 50);
			doc.setTextColor(255,0,0);
			doc.text("IT LAB Solution", 60, 5);
			doc.setTextColor(0,0,0);
			doc.text("Website, Mobile Software, Other", 50, 15);
			pageCount++;
			doc.text(pageCount.toString(), 200, 280);
			for(let i = 0; i < gloArr.length; i++){ //Writing Header
				doc.rect(tempPositionX, tempPositionY, gloArr[i].width, gloArr[i].height);
				doc.text(gloArr[i].name, tempPositionX + 1, tempPositionY + 7);
				tempPositionX += gloArr[i].width;
			}
		}
		let arr = [];
		let childOfChild = children[i].children;
		doc.rect(tablePositionX, tablePositionY, 30, 10);
		doc.rect(tablePositionX + 30, tablePositionY, 40, 10);
		doc.rect(tablePositionX + 30 + 40, tablePositionY, 30, 10);

		doc.text(childOfChild[0].innerText, tablePositionX + 1, tablePositionY + 7);
		doc.text(childOfChild[1].innerText, tablePositionX + 30 + 1, tablePositionY + 7);
		doc.text(childOfChild[2].innerText, tablePositionX + 30 + 40 + 1, tablePositionY + 7);
		tablePositionY += 10;
		coutEntry++;
	}

	// console.log(document.querySelector('#tableBody').children.length);

	doc.save();
}
