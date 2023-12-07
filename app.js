let menu = ["rau xào", "thịt luộc", "gà rán"];

function create() {
    let newDish = prompt("Mời người dùng nhập món ăn muốn thêm vào menu");
    if (newDish) {
        menu.push(newDish.toLowerCase().trim());
        updateLocalStorage();
        alert("Thêm món thành công!");
    }
}

function read() {
    let menuList = getMenuFromLocalStorage();
    alert("Danh sách món ăn:\n" + menuList.join(', '));
}

function update() {
    let oldDish = prompt("Mời người dùng nhập vào tên món muốn cập nhật");
    let oldDishLower = toLowerCaseAndTrim(oldDish);
    let index = menu.indexOf(oldDishLower);
    if (index !== -1) {
        let newDish = prompt("Mời người dùng nhập vào tên món ăn mới");
        if (newDish) {
            menu[index] = toLowerCaseAndTrim(newDish);
            updateLocalStorage();
            alert("Cập nhật món thành công!");
        } else {
            alert("Bạn chưa nhập món mới.");
        }
    } else {
        alert("Món ăn không tồn tại trong menu");
    }
}

function remove() {
    let deleteDish = prompt("Mời người dùng nhập vào tên món muốn xóa");
    let deleteDishLower = toLowerCaseAndTrim(deleteDish);
    let index = menu.indexOf(deleteDishLower);
    if (index !== -1) {
        menu.splice(index, 1);
        updateLocalStorage();
        alert("Xóa món thành công!");
    } else {
        alert("Món ăn không tồn tại trong menu");
    }
}

function updateLocalStorage() {
    localStorage.setItem('menu', JSON.stringify(menu));
}

function getMenuFromLocalStorage() {
    let storedMenu = localStorage.getItem('menu');
    return storedMenu ? JSON.parse(storedMenu) : menu;
}

function toLowerCaseAndTrim(input) {
    return input.toLowerCase().trim();
}

// Gọi hàm để thực hiện chức năng tương ứng với ký tự nhập vào
function performAction() {
    let action = prompt("Nhập vào 1 ký tự trong 4 ký tự sau: 'C', 'R', 'U', 'D'");
    
    switch (action) {
        case 'C':
            create();
            break;
        case 'R':
            read();
            break;
        case 'U':
            update();
            break;
        case 'D':
            remove();
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
}

// Gọi hàm để bắt đầu chương trình
performAction();
