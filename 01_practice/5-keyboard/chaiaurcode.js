const insert=document.querySelector("#insert");

window.addEventListener('keydown',(e)=> {
  insert.innerHTML=`
<div class="keycode">
  <table>
    <tr>
      <th>key</th>
      <th>keycode</th>
      <th>key name</th>
    </tr>
    <tr>
      <td>${e.key===" "?"space":e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
</div>
`;
});
