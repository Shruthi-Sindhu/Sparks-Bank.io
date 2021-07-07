let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);
function sendMoney()
{
   var Name = document.getElementById("Name").value;
   var Amount = parseInt(document.getElementById("Amount").value);
   if (Amount>10000){
       alert(`Balance Insufficient`);
   }
   else{
      var findUserBankAccount = Name+"BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + Amount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - Amount;
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount
      alert(`Successful Transaction !! 
       Rs${Amount} is sent to ${Name}@gmail.com.`);

      // transaction history
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`Rs.${Amount} is sent to recepient with mail-id ${Name}@gmail.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}
