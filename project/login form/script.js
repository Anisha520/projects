<script>
        document.getElementById('submit').addEventListener('click', () => {
            const FiName = document.getElementById('fName').value.trim();
            const laName = document.getElementById('lName').value.trim();
            const email = document.getElementById('emailF').value.trim();
            const paField = document.getElementById('passF').value.trim();

            if(FiName === '' || laName === '' || email === '' || paField === '') {
                alert('Please enter below all fields');
            } else {
                localStorage.setItem('firstName', FiName);
                localStorage.setItem('lastName', laName);

                window.location = 'thanks.html';
            }
        });
        
    </script>
    
#greetings {
    margin-bottom: 20px;
    font-weight: 300;
}

b {
    font-weight: 500;
    color: yellow;
}
