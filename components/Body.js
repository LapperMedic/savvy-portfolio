export default function Body(state){
    var bodyContent = '<div id="body">';

    if(state.title == 'Alex Lapp'){
        bodyContent += `
        <h3>What I like</h3>
        <ol>
            <li>Markup</li>
            <li>A well-built PC</li>
            <li>LaTeX</li>
        </ol>
        <h3>What I don't</h3>
        <ul>
            <li>Damp socks</li>
            <li>Seafood</li>
            <li>Social networks</li>
        </ul>
        <h3>What I could like</h3>
        <ul>
            <li>SCUBA diving</li>
            <li>Skydiving</li>
            <li>Not regular diving</li>
        </ul>
        <h3>Headshot</h3>
        <div class="headshot">
            <img src="https://avatars3.githubusercontent.com/u/25157151?s=300&amp;v=4" alt="Headshot of Alex Lapp" title="Headshot of Alex Lapp">
        </div>
        `;
    }

    else if(state.title == 'Blog'){
        bodyContent += `
            <h3 class="postname">The first blag</h3>
            <p class="post">
                <span class="date">2018-08-16</span>
                Welcome to my fantastic blogablog, the world's first blog to ever be created in the interwobs. On a cold October morn in 1917, a young lad named Vladimir stood up and established the first blog, which at that time was called a "electromechanical hydraulic memoir machine". Of course at the time, there was nothing for this hydraulic creation to be run on, so it was simply printed off using the still-novel concept of movable type. And that's where we connect with the modern day.
            </p>
        `;
    }

    else if(state.title == 'Projects'){
        bodyContent += `
            <h3>Projects</h3>
            <ol>
                <li>Class Showcase</li>
                <li>Choose Your Own Adventure</li>
                <li>Web Store Hack-A-Thon</li>
            </ol>
        `;
    }

    else if(state.title == 'Contact'){
        bodyContent += `
            <form method="POST" action="https://formspree.io/alexrlapp@gmail.com">
            <label>Roll call!</label>
            <input type="text" name="firstname" placeholder="First Name" class="block" autofocus required>
            <input type="text" name="lastname" placeholder="Last Name" class="block" required>
            <input type="email" name="userEmail" placeholder="Email" class="block" required>

            <label>Whaddya want?</label>
                <div class="block"><input type="radio" name="subject" value="professional" checked>
                <span>I'd like to hire you!</span></div>
                <div class="block"><input type="radio" name="subject" value="personal" checked>
                <span>Personal message</span></div>
                <div class="block"><input type="radio" name="subject" value="other" checked>
                <span>Don't know/something else</span></div>
            
            <label>Cat Facts</label>
            <div class="block"><input type="checkbox" name="optin" value="trusting" checked disabled>Subscribe me to your newsletter!</div>
            <div class="block"><input type="checkbox" name="optout" value="skeptical" disabled>Unsubscribe me from your newsletter!</div>

            <label for="marketing">Who sent you?</label>
            <select name="marketing">
                <optgroup label="Online">
                    <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
                    <option value="github">Online Portfolio (GitHub)</option>
                    <option value="search">Search Engine</option>
                    <option value="email">Email</option>
                </optgroup>
                <optgroup label="In-Person">
                    <option value="networking">We met at a networking event</option>
                    <option value="referral">Personal referral</option>
                    <option value="random">We met somewhere else</option>
                </optgroup>
                <option value="other">Other</option>
            </select>
            <label for="user_message">Talk at me</label>
            <textarea name="user_message" rows="8" cols="40" class="block"></textarea>

            <button type="submit">Submit</button>
        </form>
    `;
    }

    bodyContent += '</body>';

    return bodyContent;
}