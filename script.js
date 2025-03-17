function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
  
  if (isNaN(weight) || isNaN(height) || height <= 0) {
    alert("请输入有效的体重和身高");
    return;
  }
  
  const bmi = (weight / (height * height)).toFixed(2);
  let category = '';
  
  if (bmi < 18.5) {
    category = '偏瘦';
  } else if (bmi >= 18.5 && bmi < 24) {
    category = '正常';
  } else if (bmi >= 24 && bmi < 28) {
    category = '超重';
  } else {
    category = '肥胖';
  }
  
  document.getElementById('bmi').textContent = bmi;
  document.getElementById('category').textContent = category;
}
