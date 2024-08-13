

function Complete({newTasks}) {

    let countList = newTasks.length;

  return (
    <>
      <div className="complete">
        <p> 
            {countList === 0 ? "Sizda bugun vazifalar mavjud emas!":
             `Sizda ${countList} ta vazifa mavjud.`}
        </p>
      </div>
    </>
  );
}

export default Complete;
