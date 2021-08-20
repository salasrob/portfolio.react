import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img src={author} alt="photo...." className="profile-img"></img>
                    </div>
                
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate pretium nibh convallis eleifend. Nulla sit amet nibh in nisl aliquam rutrum ac vel nisi. Suspendisse nec velit at ex sollicitudin malesuada id ut nulla. Fusce consequat quam sit amet arcu faucibus aliquet. Nullam semper vulputate tortor eget feugiat. Pellentesque efficitur est id consectetur molestie. Praesent eros neque, pulvinar sed venenatis eget, luctus vitae urna.

Sed lacinia convallis felis. Pellentesque pulvinar augue dignissim nulla iaculis, eget semper mauris elementum. Vivamus auctor nisl nec sem consectetur, quis iaculis eros condimentum. Proin erat mi, blandit vel mollis eget, hendrerit varius magna. Vestibulum pellentesque leo ac ultricies consequat. In ornare, arcu nec egestas elementum, metus odio consectetur magna, a eleifend odio neque vel erat. Nam suscipit, ligula ac maximus posuere, sem nisl egestas mauris, a dignissim odio lacus sit amet arcu. Duis sodales, lectus et sodales efficitur, orci orci gravida sapien, quis faucibus dui ligula tincidunt leo. Nunc venenatis, augue at volutpat dignissim, eros dolor gravida dui, et molestie quam justo eget nisl. Nam accumsan diam metus. Etiam id imperdiet velit, id maximus nisi. Aenean eu libero urna. Morbi pellentesque luctus aliquam. Proin eget ullamcorper dolor. Praesent ornare mattis orci sed ullamcorper.
                </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
