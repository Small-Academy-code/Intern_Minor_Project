import React from "react"
import GymLocationCard from "./GymLocationCard"

function Gyms() {
  return (
    <div className="gyms">
      <div className="gyms_top_section">
        <h2>Our Gyms</h2>
      </div>
      <div className="gyms_locations">
        <h3>Silver Gym's Locations across India</h3>
        <section className="activeGyms">
          <GymLocationCard state={"Andhra Pradesh (3)"} cities={"Vijaywada, Visakhapatnam, Guntur"} image={"https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGd5bXxlbnwwfHwwfHw%3D&w=1000&q=80"} image_label={"Guntur Silver Gym"}/>
          <GymLocationCard state={"Assam (6)"} cities={"Guwahati(2) , Silchar, Jorhat(3)"} image={"https://content.jdmagicbox.com/comp/guwahati/l6/9999px361.x361.150621160329.t6l6/catalogue/snap-fitness-india-pvt-ltd-silphukhri-guwahati-gyms-0crrdk0zuv.jpg"} image_label={"Guwahati Silver Gym"} />
          <GymLocationCard state={"Delhi (18)"} cities={"New Delhi(18)"} image={"https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/51614575958598.jpg"} image_label={"New Delhi Silver Gym"} />
          <GymLocationCard state={"Haryana (7)"} cities={"Gurugram(3), Faridabad(4)"} image={"https://content.jdmagicbox.com/comp/bahadurgarh/z2/9999p1276.1276.170921175512.n6z2/catalogue/gym-box-bahadurgarh-ho-bahadurgarh-gyms-1bhzsjrqey.jpg"} image_label={"Gurugram Silver Gym"}/>
          <GymLocationCard state={"Karnataka (20)"} cities={"Bengaluru(9), Hubballi-Dharwad(5), Mysuru(6)"} image={"https://content.jdmagicbox.com/comp/bangalore/r3/080pxx80.xx80.200825152754.f9r3/catalogue/gold-s-gym-yelahanka-bangalore-gyms-pj5ancu0fk.jpg?clr="} image_label={"Bengaluru Silver Gym"} />
          <GymLocationCard state={"Madhya Pradesh (7)"} cities={"Indore(3), Gwalior(3), Bhopal"} image={"https://content.jdmagicbox.com/comp/bhopal/f9/0755px755.x755.190625200319.k8f9/catalogue/ks-fitness-ayodhya-nagar-bhopal-gyms-84cu8065n7.jpg?clr="} image_label={"Bhopal Silver Gym"}/>
          <GymLocationCard state={"Maharashtra (27)"} cities={"Mumbai (11), Aurangabad(2), Nagpur(7), Pune(7)"} image={"https://images.mid-day.com/images/images/2021/aug/gymsstock_d.jpg"} image_label={"Mumbai Silver Gym"} />
          <GymLocationCard state={"Meghalaya (3)"} cities={"Shillong (3)"} image={"https://gymnavigator.com/photos/382268/382268477.jpg"} image_label={"Shillong Silver Gym"}/>
          <GymLocationCard state={"Punjab (10)"} cities={"Chandigarh(6), Lahore(4)"} image={"https://www.deccanherald.com/sites/dh/files/articleimages/2021/06/15/punjab-997792-1623769146.jpg"} image_label={"Punjab Silver Gym"} />
          <GymLocationCard state={"Rajasthan(5)"} cities={"Ajmer, Jaipur(2), Jodhpur(2)"} image={"https://myudaipurcity.com/wp-content/uploads/2018/01/Best-Gyms-in-Udaipur.jpeg"} image_label={"Jaipur Silver Gym"}/>
          <GymLocationCard state={"Tamil Nadu(7)"} cities={"Chennai/Madras(7)"} image={"https://paulsons.in/img/slam/9.jpg"} image_label={"Chennai/Madras Silver Gym"} />
          <GymLocationCard state={"Telangana(5)"} cities={"Hyderabad(4), Nizambad"} image={"https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/GymTrainers_1200_26052021-compressed.jpg?itok=zZ7wzlRJ"} image_label={"Hyderabad Silver Gym"} />
        </section>
      </div>
      <div className="gyms_coming_soon_section">
        <h3>Gyms Coming Soon</h3>
        <p className="gyms_coming_soon">
          Kochi - Kerala |  Kolkata - West Bengal | Canacona - Goa
        </p>
      </div>
    </div>
  )
}

export default Gyms