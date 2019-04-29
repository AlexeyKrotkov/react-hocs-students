### HOCs, JS composition, Children, links to “use Hooks”

---
### Homework
Задание основывается на предыдущем домашнем задании (Synthetic events, Controlled Uncontrolled components, Lifecycle, Refs)

https://github.com/AlexeyKrotkov/react-app-lection-for-students/tree/homework

В отдельной папке и новом МР необходимо добавить в предыдущее задание использование HOCs. 

**Обязательные требования:** 
1. Нужно упросить работу с формой и контролируемыми inputs через HOC withSimpleForm, который подразумевает выполнение логики onChange и обновление formValues внутри себя. По сути он inject-ит props onChange и formValues.
2. Следовательно, нужно реализовывать валидацию вне хока, используя onChange из хока как мы делали в классе.

**Рекомендации**: именно пробрасываемый хоком onChange лучше реализовать так чтобы он принимал не event, а просто значение value, которое установит в formValues. Иначе нельзя будет например сделать в обёрнутом компоненте onChange(createCardMask(1111222233334444)), если бы onChange ожидал event.

**Необязательные требования (что можно улучшить):** 
1. Вынести в отдельные React компоненты HTML элементы input => Input, button => Button, select => Select, а также вынести в компонент FormField (который к примеру мог бы содержать в себе поля формы (Input или Button или Select), tooltip, label), form => Form.
2. Использовать CSS modules без БЭМ. Проследить за неймингом стилей и не завязываться на синтаксис БЭМ.
