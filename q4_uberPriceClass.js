class Uber {
    constructor(distance, time) {
        this.distance = distance;
        this.time = time;
    }
    calculatePrice() {
        const basePrice = 25;
        const distanceRate = 10;
        const timeRate = 5;
        const timeCost = this.time * timeRate;
        const distanceCost = this.distance * distanceRate;
        const totalCost = basePrice + timeCost + distanceCost;
        return `fair=${totalCost}/rupees`
    }


}

uberPrice = new Uber(5, 10);

const uberCost = uberPrice.calculatePrice();
console.log(uberCost);
