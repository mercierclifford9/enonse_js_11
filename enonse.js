let todoList=[];

function addTask(tach){
    todoList.push(tach);
}
function displayTasks(){
    for(i=0; i<todoList.length; i++){
        console.log((i+1)+"- "+ todoList[i]+"\n")
    }
}
function markTaskDone(idx){
    todoList.splice(idx, 1);
}



console.log("Menu\nFe on chwa nan 4 numero sa yo");
let chwa, chwa2, ajoute, sup;
do{
    let otorize=new RegExp('^[1234]*$');
    chwa=prompt("Peze[1] pou ajoute on tach \nPeze[2] pou afiche tach yo\nPeze[3] pou fini on tach\nPeze[4] pou femen program lan");
    while(!otorize.test(chwa)){
        chwa=prompt("Chwa enkorek\nPeze[1] pou ajoute on tach \nPeze[2] pou afiche tach yo\nPeze[3] pou fini on tach\nPeze[4] pou femen program lan");
    }
switch(chwa){
    case '1':
        do{
            ajoute=prompt("Ekri tach wap ajoute an");
            addTask(ajoute);
            chwa2=prompt("Peze[W] pou ajoute on lot tach oubyen [N] pou tounen nan meni an");
            if(chwa2=='N' || chwa2=='n'){
                break;
            }
            while(chwa2!='W' && chwa2!='w'){
                chwa2=prompt("Chwa enkorek\nPeze[W] pou ajoute on lot tach oubyen [N] pou tounen nan meni an");
                if(chwa2=='n' || chwa2=='N'){
                    break
                }

            }
            if(chwa2=='N' || chwa2=='n'){
                break;
            }
        }while(true);
        break;

    case '2':
        console.log("Lis tach ou:\n")
        displayTasks();
        
        break;
    case '3':
        sup=prompt("Antre endis tach wap fini an. \nNB: Endis yo komanse nan 1 !!!");
            let otorize= new RegExp('^[0123456789]*$');
            while(!otorize || sup<1){
                sup=prompt(" Endis enkorek\nAntre endis tach wap fini an. \nNB: Endis yo komanse nan 1 !!!");
            }
        markTaskDone(sup-1);
        console.log("Tach '"+ todoList[(sup-1)] +"' fini avek sikse.");
        

    break;
    case '4':

    break;
    default:
        console.log("Svp fe on chwa valid");
        break;
}
}while(chwa!=4 )
addTask(23);
addTask(34);
addTask(63);
addTask("bbj");
displayTasks();
console.log(todoList);
