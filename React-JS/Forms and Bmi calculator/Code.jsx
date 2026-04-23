
// // usrRef Usage 

//   let nameInput = useRef();
//   let emailInput = useRef();
//   function submitHandler(event){
//     event.preventDefault();
//     console.log(nameInput.current.value, emailInput.current.value)
//     nameInput.current.value = ''
//      emailInput.current.value = ''
//   }
//   return (
//      <div className='mx-auto flex h-screen w-full items-center justify-center'>
//         <form action="" className='w-[400px] p-4 rounded-xl' onSubmit={submitHandler}>
//           <h1 className='text-xl font-bold'>This is a useRef input</h1>
//           <p className='my-2' >In uesRef we target the input fields using ref attribute and we can access the value using ref.current.value </p>
//            <input type="text" ref={nameInput} className='w-full border outline-none p-3 rounded-lg my-2' placeholder='Enter name' />
//            <input type="text" ref={emailInput} className='w-full border outline-none p-3 rounded-lg my-2' placeholder='Enter email' />
//            <input type="submit" className='bg-violet-100 text-violet-600 p-3 rounded-lg'  />
//         </form>
//     </div>
//   )
// }



// controlled components

//  let [value , setValue] = useState({name:"" , email:""})
//   function submitHandler(e){
//     e.preventDefault();
//     console.log (value)
// //   }
//  <form action=""onSubmit={submitHandler} >
//          <input type="text" onChange={(event)=>setValue({...value, name:event.target.value})} placeholder="Name" />
//          <input type="text"  onChange={(event)=>setValue({...value, email: event.target.value})} placeholder="Email" />
//          <input type="submit" />
//        </form>



// React hook form

//   using function

  //  let {register , handleSubmit } = useForm();
//   function submitHandler(data){
//     console.log(data)
//   }
//  <form action=""onSubmit={handleSubmit(submitHandler)} >
    //      <input {...register('name')} type="text"  placeholder="Name" />
    //      <input {...register('email')} type="text"  placeholder="Email" />
    //      <input type="submit" />
    //    </form>


    // another type of doing 

    //  let {register ,handleSubmit } = useForm();
    //  <form action=""onSubmit={handleSubmit((data)=>console.log(data))} >
    //      <input {...register('name')} type="text"  placeholder="Name" />
    //      <input {...register('email')} type="text"  placeholder="Email" />
    //      <input type="submit" />
    //    </form>


    

    // Bill split 

    // let [bill , setBill] = useState("⛱️🚘⛱️");
    //  let {register , handleSubmit , reset} = useForm();
    //  function submitHandler(data){
    //   let amount = data.amount;
    //   let users = data.users;
    //   setBill(Math.floor((amount / users)));
    //   reset();
    //   <form action="" onSubmit={handleSubmit(submitHandler)} className='w-[400px] text-center border p-4 rounded-xl shadow-xl transition-all bg-slate-50'>
    //     <h1 className='text-4xl '>{bill}</h1>
    //     <h1 className="text-xl font-bold">Split the bill among your friends!</h1>
    //     <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, pariatur!</p>
    //     <div className="flex mt-4 gap-3">
    //       <input type="text" {...register("amount")} placeholder='Enter amount' className='border w-1/2 p-3 rounded-lg outline-none' />
    //       <input type="text"  {...register("users")} placeholder='Enter users' className='border w-1/2 p-3 rounded-lg outline-none' />
    //     </div>
    //      <input type="submit" value="Split the bill" className='mt-3 bg-black w-full rounded-lg text-white p-3 hover:cursor-pointer' />
    //    </form>


//  card form

//     let [users , setUsers] = useState([]);
//  let {register , handleSubmit , reset} = useForm();
//  function addUserHandler(data){
//   setUsers([...users, data])
//  }
//  <form action="" onSubmit={handleSubmit(addUserHandler)} className="w-full m-2 flex justify-center" >
//       <input  {...register("name")}  type="text" placeholder="Name"  className="border p-2 outline-none" />
//       <input  {...register("email")} type="email" placeholder="Email" className="border p-2 outline-none" />
//       <input  {...register("img")}   type="text" placeholder="Image"  className="border p-2 outline-none" />
//       <input  type="Submit" value="Add User" className="bg-black text-white p-2 outline-none" />
//     </form>

//      <div className='mx-auto flex flex-wrap gap-3 h-screen w-full items-center justify-center'>
//       {
//         users.length > 0 ? users.map(user=> <Card name={user.name} img={user.img} email={user.email} />) : <h1>No Users</h1> 
//       }
//     </div>