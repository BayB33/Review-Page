class Customer {
    constructor(picture, name, position, review){
        this._picture = picture;
        this._name = name;
        this._position = position;
        this._review = review;
    }

    get picture() {
        return this._picture;
    }

    get name() {
        return this._name;
    }

    get position() {
        return this._position;
    }

    get review() {
        return this._review;
    }
}

const customerBarbara = new Customer('barbara.jpg', 'Barbara', 'Assistant Manager', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, porro facilis quos doloribus molestias eaque!');
const customerPerry = new Customer('perry.jpg', 'Perry', 'Programmer', 'Repellendus non ratione id eveniet quisquam omnis itaque explicabo nihil, inventore rerum nisi, atque ex sequi!');
const customerClarence = new Customer('clarence.jpg', 'Clarence', 'Web Master', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur fuga laboriosam officia facilis voluptas? Repellendus non ratione id eveniet quisquam omnis itaque explicabo nihil, inventore rerum nisi, atque ex sequi!');
const customerSara = new Customer('sara.jpg', 'Sara', 'Physician', 'Enim beatae provident voluptates accusantium expedita, maxime minima fugiat consectetur fuga. Tempora id error eos quae iusto saepe. Eius expedita et animi veniam minus officiis. Ea eligendi maxime corporis in tempore, dolore culpa accusamus repellat ullam? Harum.');
const customerTom = new Customer('tom.jpg', 'Tom', 'Cleaner', 'Tempora id error eos quae iusto saepe. Eius expedita et animi veniam minus officiis. Ea eligendi maxime corporis in tempore, dolore culpa accusamus repellat ullam? Harum.')

const arrayOfCustomers = [customerBarbara, customerClarence, customerPerry, customerSara, customerTom];

let customersName, customersPic, customersPosition, customersReview;
let i = 0;


const randomReview = () => {
    const randomCustomer = Math.floor(Math.random() * arrayOfCustomers.length);
    customersName = arrayOfCustomers[randomCustomer].name;
    customersPic = arrayOfCustomers[randomCustomer].picture;
    customersPosition = arrayOfCustomers[randomCustomer].position;
    customersReview = arrayOfCustomers[randomCustomer].review;

    clientName.innerHTML = customersName;
    clientPosition.innerHTML = customersPosition;
    clientReview.innerHTML = `" ${customersReview} "`;
}

const nextReview = (e) => {
    e.preventDefault();
    if(i === arrayOfCustomers.length){
        i = 0;
    } else {
        i++;
    }

    customersName = arrayOfCustomers[i].name;
    customersPic = arrayOfCustomers[i].picture;
    customersPosition = arrayOfCustomers[i].position;
    customersReview = arrayOfCustomers[i].review;

    clientName.innerHTML = customersName;
    clientPosition.innerHTML = customersPosition;
    clientReview.innerHTML = `" ${customersReview} "`;
}

const previousReview = (e) => {
    e.preventDefault();
    if(i === 0){
        i = arrayOfCustomers.length - 1;
    } else {
        i--;
    }

    customersName = arrayOfCustomers[i].name;
    customersPic = arrayOfCustomers[i].picture;
    customersPosition = arrayOfCustomers[i].position;
    customersReview = arrayOfCustomers[i].review;

    clientName.innerHTML = customersName;
    clientPosition.innerHTML = customersPosition;
    clientReview.innerHTML = `" ${customersReview} "`;
}

clientName.innerHTML = arrayOfCustomers[i].name;
clientPosition.innerHTML = arrayOfCustomers[i].position;
clientReview.innerHTML = arrayOfCustomers[i].review;

generateRandomReview.addEventListener('click', randomReview);
showNextReview.addEventListener('click', nextReview);
showPreviousReview.addEventListener('click', previousReview);


