document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const responseMessage = document.getElementById('responseMessage');
    
    const freeEmailDomains = [
        'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'qq.com',
        '163.com', '126.com', 'sina.com', 'sohu.com', 'icloud.com'
    ];
    
    const emailDomain = email.split('@')[1];

    if (freeEmailDomains.includes(emailDomain)) {
        responseMessage.innerText = 'Please use your company email address (e.g., name@company.com).';
        responseMessage.style.color = 'red';
    } else {
        responseMessage.innerText = 'Thank you for submitting your contact information!';
        responseMessage.style.color = 'green';

        // 提交表单
        event.target.submit();
    }
});
