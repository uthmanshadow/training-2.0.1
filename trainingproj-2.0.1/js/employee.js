<script>
  document.getElementById("employeeForm").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Validate form fields (you can add more validation as needed)
    var name = document.getElementById("name").value;
    var personalNo = document.getElementById("personalNo").value;
    var department = document.getElementById("department").value;
    var designation = document.getElementById("designation").value;
    var location = document.getElementById("location").value;
    
    if (name === "" || personalNo === "" || department === "" || designation === "" || location === "") {
      alert("Please fill out all fields.");
      return;
    }
    
    // If form is valid, you can proceed with form submission
    // For demonstration purposes, I'm just logging the form data
    console.log("Form submitted successfully!");
    console.log("Name: " + name);
    console.log("Personal No: " + personalNo);
    console.log("Department: " + department);
    console.log("Designation: " + designation);
    console.log("Location: " + location);
    
    // You can add AJAX request or any other logic here to handle form submission
  });
</script>
