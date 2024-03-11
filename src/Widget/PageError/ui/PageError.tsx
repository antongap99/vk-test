import style from './PageError.module.css';


export const PageError = () => {
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={style.PageError}>
            <p className={style.PageError__title}>Произошла не предвиденнная ошибка</p>
            <button type="button" onClick={reloadPage}>
                Обновить страницу
            </button>
        </div>
    );
};
