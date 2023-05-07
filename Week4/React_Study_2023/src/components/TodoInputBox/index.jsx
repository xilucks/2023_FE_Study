const TodoInputBox = () => {
    return (
        <div className={"mt-10"}>
            <input type="text" placeholder="오늘 일정을 입력해주세요" className="input input-bordered input-warning w-full max-w-xs" />
            <button className={"btn btn-warning text-white ml-4"}>추가</button>
        </div>
    )

}

export default TodoInputBox