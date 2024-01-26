export function generateContactPage() {
return `

    <div class="contact-section">
        <div class="contact-info-section">
            <div>
                <div class="info-category">Address</div>
                <div class="info-details">
                    <div>432 Serenade Boulevard, Harmony City, Melodyland</div>
                   
                    <div>PO Box: 56789, Symphony Town, Musicaland</div>
                </div>
            </div>
    
            <div>
                <div class="info-category">Opening Hours</div>
                <div class="info-details">
                    <div class="day">Mon - Thu</div>
                    <div class="time">9am-8pm</div>
                    <div class="day">Fri - Sun</div>
                    <div class="time">9am-10pm</div>
                </div>
            </div>
    
            <div>
                <div class="info-category">Contact Numbers</div>
                <div class="info-details">
                    <div class="contact-type">Tel</div>
                    <div class="contact-value">+123 456 7890</div>
                    <div class="contact-type">Fax</div>
                    <div class="contact-value">+123 456 7891</div>
                </div>
            </div>
    
            <div>
                <div class="info-category">Email</div>
                <div class="info-details">
                    info@serenaderestaurant.com
                </div>
            </div>
    
            <div>
                <div class="info-category">Website</div>
                <div class="info-details">
                    <a href="http://www.serenaderestaurant.com" target="_blank">www.serenaderestaurant.com</a>
                </div>
            </div>
    
            <div>
                <div class="info-category">Additional Opening Hours</div>
                <div class="info-details">
                    <div class="day">Mon - Thu</div>
                    <div class="time">11am-9pm</div>
                    <div class="day">Fri - Sun</div>
                    <div class="time">11am-12pm</div>
                </div>
            </div>
        </div>
    </div>
        <div class="map">
            <div style="width: 100%; height: 100%;" ><iframe width="80%" height="80%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=serenade%20bistro+(serenade%20bisto)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe></div>
        </div>
        <form class="contact-form">
            <div class="form-header">BOOKINKS</div>
            <div class="form-item">
                <label for="name">Name*</label>
                <input type="text" id="name" name="name" required>
                <div class="validation-message" id="name-error"></div>
            </div>
        <div class="form-item">
            
                <label for="last-name">Last name</label>
                <input type="text" id="last-name" name="last-name">
        </div>
            
            <div class="form-item">
                <label for="email">Your email*</label>
                <input type="email" id="email" name="email" required>
                <div class="validation-message" id="email-error"></div>
            </div>
        
            <div class="form-item">
                <label for="message">Message*</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <div class="validation-message" id="message-error"></div>
            </div>
        
            <button class="submit" type="submit">Submit</button>
        </form>
        
    
        
   
`
}
