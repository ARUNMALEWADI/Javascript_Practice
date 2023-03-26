console.log('person1 shows ticket');
console.log('person2 shows ticket');


const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });
  const getcoldDrinks =  new Promise((resolve, reject) => {
    setTimeout(() => resolve('colddrink'), 3000);
});

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
 

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);
  
 
 
   let [popcorn,butter,colddrink]= await Promise.all([getPopcorn,addButter,getcoldDrinks]);
   console.log(`${popcorn},${butter},${colddrink}`);
  console.log(`Husband:Anything else darling`);
	console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person 4 shows ${t}`));

//console.log('person4 shows ticket');
