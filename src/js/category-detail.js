import '../scss/category-detail.scss'

var searchPostBtn = document.querySelector('#search-post-btn');
var searchContent = document.querySelector('#search-input');
var listPost = document.querySelectorAll('.list-post');
var result = document.querySelector('#result');
var resultNumber = document.querySelector('#result>h6');
searchPostBtn.onclick = () => {
    result.classList.toggle('hidden');
    result.classList.toggle('flex');
    if (searchContent.value.length === 0) {
        for (let i = 0; i < listPost.length; i++) {
            listPost[i].classList.toggle('hidden');
            listPost[i].classList.toggle('flex');
        }
        resultNumber.innerHTML = 'Chúng tôi đã tìm thấy 0 kết quả cho cụm từ tìm kiếm của bạn'
    }
}