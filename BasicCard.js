function BasicCard(front, back){
	if(this instanceof BasicCard == false){
		return new BasicCard(front, back);
	}

	this.front = front;
	this.back = back;
}

module.exports = BasicCard;