export default `
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