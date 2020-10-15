import React from 'react';
import { NavLink } from 'react-router-dom';
import {UsersAxios} from '../../api/api';
import s from './Users.module.css';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(p => {
                return <span key={p} className={`${s.page} ${props.currentPage === p && s.active}`}
                    onClick={() => { props.changeCurrentPage(p) }}>{p}</span>
            })}
            {props.users.map((u) => {
                return (
                    <div key={u.id} className={s.users}>
                        <div className={s.userName}>
                            <div>
                                <NavLink to={'/profile/' + u.id}> <img src={u.photos.small ? u.photos.small
                                    : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAQEBAQEBAQEBIQEBEODQ8QEA8SGxcWFyAXFhgZHCggGBoxIBkZIzIiJykrLjAvFx8zODMsNygtLisBCgoKDQ0OFg0PFisZFRkrKy4yNys3NywrLDc3KysrLCsrMisrKysrLTUtNysrKzcyKyw4KysuKystMi0tKzIrK//AABEIAPoAyAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcFCAECBAP/xABLEAABAwICBAgJBgwGAwAAAAABAAIDBBEFEgYHITETQVFhcYGRoQgUIjJSYnKxwSMzQoKSsiQlNVNkc3Sis8LR0hUXRFRjo0OE8P/EABkBAQEBAQEBAAAAAAAAAAAAAAADAgEEBf/EACURAQACAwACAgIBBQAAAAAAAAABAgMRMRIhBEEFMrEUFVFhkf/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQF1c4AEk2A2kncFEdOdYNJhLcrvlqpwuynjIzdLz9BqofSjTatxNx8ZqMkV9lNA8shA57bXnpXYjbkzpfGOay8JoyWvqRLINhjpQZnX6W7B1lQ7ENeLf9NQSO5HVEzI/wB1oKppjmDcWjoIXcFbikMTeVjz66cSd5lPRxjn4V594XlGuHF+Sk6OBf8A1UCRa8IZ85WVSa68Qb85S00g48jpGHq3qTYTrsonkCqp56Y8bgBNH2t2jsVHoueEO+ctssGxylrWcJSzxzt4+DeCW+0N7etZBahUVTJTyCaCR8ErdokicWO6+XrVx6A62myllNieWOUkNjqQA2KU8jx9B3csTWYbi0SttFwDdcrLQiIgIiICIiAiIgIiICIiAoppZjs4kbh+Hhr6+Zucuf8ANUcO4zSfyjjKymlGNsoKWSocC8ts2KMedLK45WsHOSQvHodgT6WJ8tQRJW1TuGq5PX4o2+o0bAFyZ0MRhGq/DojwtVGa6qd5Us9U5z+EfxkMvlA7VJ4MCo4xZlJTMA3ZaeIfBZFFPcuvDLg9K/Y6mp3D1oIz8FgsU1c4TUg5qOONx+nT3gcPsWClaJuXFLaRal5GBz6Co4W20QVVmuPMJBsv0hVdX0UtPK6GeJ8MzfOjkFndI9Ic4W3SwOlmitLikPBVDPKHzUzQBLC7lafhuKpXLMdZmkS1cRZPSTAZ8OqX0tQPKb5UbwPJmj3B7fiOIhYxeiJ37SmNC4e0EWO5couuLY1PafOa9mGVryWu8mjmedv6px93YrrWnT233Egg5muG9rhtB5lslqs0r/xOhaZCPGaf5GoHKRuf1j3FRtXS1bbTNERZaEREBERAREQEREBFwog/F66vkezDuCgpo3Fjq6ojMnDPGwiCO4zNB2Zjs5EHFWzx/F2RnbT4Uxszh9F9ZIDkB5crLu6XhS9UVpjiOMaOTucyqiqIa6V85kkpWBzpgGhzXAeaLZbWO5THVvrOixV3i80Yp6sAua1riY5gN+S+0O9XmWLRPRYiIiw6IvJilfFSwyTzPDIomF73HcAPef6qr8Q0s0hxG7sKoHU9Ne7JqhsYllbygSGw6geldiNi20Wt1VrK0goJ3Q1MreFjIzxT08XMd7ANhHGCrS1cay4cWPASsEFY1pdwYddkwG8xk8fqrs1mHH21uaMiuoHysaPGKQGeI22uaB5bOWxHeAtdmm4B4iLhbgOaCLHaCLHnC1Ox3D/FauqprW4Cokjb7Oa7erKQq4Z+mMkfbwoiK6QpXqtx/wAQxOIuNoaq1PNfcCfNd2+9RRdZASNmwja0jiI3Llo3DtZ1LcVFHtAsa8fw6lqL3c6MNk5pG+Se8X61IVBcREQEREBERAREQRrWPiLqXCq2ZhIeIS1pG8F5DLjn8pYDDNZuB09HC1lTlbFExjYRDLwrbC1rWtfrUi0+o46jDqqnklji4WFwa6V7WNzjyhtJ5QFqjT0E0riyOJ8rgbERML9vMRxLkzERuZNSlWsvTl2MTsLWmOmguII3EZiTve71jycVlHMArX09XTTMOV0U8bgR7QuOzZ1rO4dq6xKaxMTYW8s7w0/ZFypLh+qYgh01XYgg2gi4+Yu/ovJl/I/Fx+rXj+Va4MluQ2FXAVZuwMvHytbiMruJ5rpGZTytaywB6lndC8Wn4WWgqpOGkijE8FQW2dNAXZflLbM7Tsvx3Ch8f8hg+RaaUn27fBekblxprLFJW4RR1BHAz1EsrmutllkiZdjHcozOvblaFK6yrjgjdLK9sccbS573kNa1o4yq01+YNJNRQ1UWbNRSl78t8zY3gAuFuQhveqJxDG6upaGT1U8zG+a2WZ72jqJ2r6NeIsprDx9mJYjUVUYIidlZHmFi5jGhocenf1rC4ZXyUs0VREcskL2yNI5Rxde5eZZPRrBJcQqoaSIHNK4Am18jPpOPIAFpxt3h9UJoYph5ssbJB0OaHfFa/a56LgsXlcBYTwwzddjGfuLYGgpWwxRws8yKNkbb78rQAPcqb8ICntU0UvpQyx/Zc138yzj/AGL8VUiIvUgIiILk8H3FLx1lGT83I2eMeq/Ye8d6t9a3an8R8XxiBpNm1MckB5zbO3vC2RULRqV68ERFx0REQEREBRTTnCcTqWRjD6ttNlJMrCCx027YJRcs7FK0QU+NEqthzz4Q2rk45H4oKknqmXqo8TnD5IGYVUsfCGGSOIQWYHXy+abG9j2K1lD9GZM2LY2fRdRR9kLj8V4M/wCPw5fdt/8AVq5rV4wD8TqRvw2uH/rud91eWXHqgf6GsHTQ1J+CtdF5f7R8X/Df9VkVGMcqnebR1nVh1R8QpPoPh1S6aWuqo3QkxCngie0Nk4PNmc94v5JJtYcjedTVF6MHwcGG3lSPbF81rxqXSRgcC1wDmuBBBAIcDsII5FU+k2pCnmkdJRTmlzG5hewyRD2doLRzbVbaL2ROklFU+oackcJXwht9vB073OtzXIVoaG6E0eEsIp2l0rwBJPLYyyc3qt5gpKiTaZBVH4QTPk8PdySzt7WtPwVuKqPCBH4PQn9JeP8ArK1j/aGbcUqiIvWgIiIPThVaaeppagG3A1MUnVmF+5bcNIIBG0HaFp1UNuxw5itr9D67xjD6Kb85TROPTlAPepX6rTjMIiLDYiIgIiICIiDhQvQrbiOPO/TIG/ZgaFNCoboKPwvG3cuJZeyGNZtwTFERTdEREBERAREQFU/hBH8HoR+kvP8A1lWwqh8IN/kYc3/knd2NYPitU/aGbcU4iIvYgIiIBWxGpSr4XBqYHfC6WE/Ve4juIWu6u7we6i9FVxfm6suHQ9jT8Fi6lFqoiKSgiIgIiICIiDo9waCSbAC5J3AKEarqxlQMUqIzmjmxWdzHcTm5WAEdiwevHSt0ELMOgdllqWl07mnayDdbmzbugFezUEwDCXc9XN7mBctzZv2shERSdEREBERAREQFSnhAzXnoI/Rinf2uYPgrrVC675DLikUTdpjpGDozPeTfqW8f7M24gFLEDd7vMZv9Y8TV8XuzEk7yb/8A3MvvWTA2jZ82zd6zuNy8y9X+0JERF0FbXg9T2kxGLlFPJ98KpVZWoGW2IVbPSpGu7JB/VYvxunV8oiKSoiIgIiIC+VRM2NjpHkNYxpe4nc1oFyV9VX+u3GTTYW+JptJWPbTttvyHa4/ZFvrIKM0hxl2IVlRWOv8ALSHgwfoRDY1vNsV3aiG2whvPUzn94BUC0WsBuGxbBajm2weP9fUfxCFrLGqxDFJ3Mp+iIvOoIiICIiAiIg4JWtOsPHY6vEauWA5mOc2EScTmRtDTl9UuurM1yaYeKQeIwOtUVLDwjgdsMG4nmc7cOsqiQLbBu3BXxV+072+hERXSdmNuQOUgLvVWzvtuzED3LvQD5QHiaC89QJXwJ4+tBwrA1FPti0g9Kif3PYq/U+1HD8bn9jl++xZvxqnWwqIiisIiICIiAqH1+YhwldS0wPkwQOlcOLO91h3N71fC1l1p1PC4zXH0HRxD6rG/1Wqx7ZtxFlsLqTH4nh/XVH8Ry16Ww2pP8jw/rqj+I5dzcZx9TtEReZUREQEREBY3SHGYqCmmqpj5ETb2G97twaOcmw61klQ+uvSjxmpFDE75GlN5rHY+otu6GjvceRapXc6cmdQgOL4nLWTy1M5vLM7M7kaNwYORoGxeREXr48/REXeKMuIaBck2C6PrEMsb3cbyI29Gwn4Lzr01rhcMbtbGMoPpHjPavMuEisLUWPxq88lHJ9+NV6rC1Fn8av8A2OT78a5fjVetgURFFYREQEREBasaeflbEr/7t/wW0y1s1tYeafF6m4s2oDKhh9K7Q094K1TrN+IhdbCaj3XwaA8ss/8AEcqQ0TwJ+JVkVJHezjmneN0UIsXE8h4hzlXzqnpxDQPhbsbFW1kbRyBszgEyz9OUj7TNERedQREQEREEc0/0h/w2gnqBbhbcHAD9KV2wdm/6q1iLiSS4lznEuc473ONySeVWrr9xQunpKQXyxxuqX8hc4ljewB32lVK9OKuo2lefehEXZjSSAASTuAG1VTdV6x8i2/8A5XjZ/wAbP7imURbXWdJxN2FrOnlPMvK9xJJJuTtJK513jhERdcFPtR7vxvblo5vvMKgKnepH8sD9km97Fm/Gq9bEIiKKwiIgIiICwGlOiFFijWCrizGO+R7HFkjL7wHDi5ln0QYXRvRejw1hZSQiPNte65dI/wBpx2lY7V+LR1zfRxWtH7+b4qVqI6BP8vFmeji1R+82NyzbgliIim6IiICIiCAaytXpxV0U8MrYqiJhjIkaTHKy+YA22tIJO3nKrz/J/Fb2vSW5fGH27Ml1sEi3F5iNQzNYlr9i+qeqpKSoqp6qnAgidLkijkeXW22zOtbsUHNY61mARgjbkBzHpO8rZXWQ2+EYiB/tZD3XWsQVsczbrF41wREVUxERAU+1GNvi7j6NHJ99gUBVjahGXxOpPo0Xvkas341Tq/URFFYREQEREBERBwoRoK+2IY9F6NdHL9uJv9qnCr/AHcFpHisX5+lpqgDly+QfeuTwT5ERSdEREBERAREQYnS2n4WgrY+N9JOB05HLVKM3DTzD4LcCRgc1zTucCD0HYtRqymMMssJ2GKWSI/VcW/BXw/aeR8kRFdIREQFZ/g/R3ra53JTRN7X3+CrBW/4PNP8AlGblfDEOprifeFi/G6dXIiIpKiIiAiIgIiICgOkEfi2P4ZVbmVcM1C8+vYvb7lPlHdOcBdX0jmROyVETmz0snoTsOZvUd3WgkCKPaG6TMxCEkjgqqE8HV07tj4JRsOz0TvBUhUeOiIiAiIgIiIC1w1u4X4tis5Asypayobs2XIyu6fKaftLY9VnrzwMzUUdWwXfRvu+w28A+wd2HKe1bxzqzNo3CikRF60BERAWwWpDDDBhTJHCzqqV8/wBU2De4d6pjQ7RebFqhsMTXCEEGonsckbOMA8bzyLaGjpmQxsijGVkbGsY0cTQLBSvP0rSNPuiIsNiIiAiIgIiICIiCOY9olDVSCojfJSVjBZlVTHLIR6MgOyRvMVhJpdJKMn5OixSMbiwmknI6CcqnyLmhX7dY0sWyswfEqfldHCKhg622Xtp9Z2Eu2PqHQHkqaeeIjtbbvUzXzlgY/wA5rXe00H3rnjAw1Jpdhs3zdfSO5vGYgewlZOKuhf5ksbvZkY73FeOq0ZoJfnKKlf7VNET7ljZdXuEO34fTD2GZPu2XPASUG+7usuVE3atsJ4qYt9ipqW+566HVnhn5ufqrqv8AvTwEvXlruBfG+OYxmORjmPa9zQHNIsQb8SjP+WWFccMx9qtqj/OvqzVpg430Mbv1j5X/AHnJ4igdMsDbhtU6Fs0csLrvp5GSscTHfzXWPkuG7n3rF0tPJMbQxSynkiie/wBwW0lFolhsHzVDSs5xTx37SFl4omtFmtDRyNAA7lWLzHpjwjbWzCtW+L1NrUvANP06p7Y7fV2u7lPdH9SsLCH19Q6oI28DCDFF1nzndytpEm0y7FYh5MOw+GmjbFBEyKNvmsjaGtC9aIstCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIuHbiiD//2Q=='}></img>
                                </NavLink>
                            </div>
                            <div>
                                {u.name}
                            </div>
                        </div>
                        <div className={s.userInfo}>
                            <div>location: 'u.location.city u.location.country'</div>
                            <div>status: {u.status}</div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.isFollowed.some(s => s == u.id)}
                                        onClick={() => {
                                            props.changeIsFollowed(u.id, true);
                                            UsersAxios.unfollow(u.id)
                                                .then(data => {
                                                    props.changeIsFollowed(u.id, false);
                                                    if(!data.resultCode)
                                                        props.unfollow(u.id);
                                                })

                                        }}>Unfollow</button>
                                    : <button disabled={props.isFollowed.some(s => s == u.id)}
                                        onClick={() => {
                                            props.changeIsFollowed(u.id, true);
                                            UsersAxios.follow(u.id)
                                                .then(data => {
                                                    props.changeIsFollowed(u.id, false);
                                                    if(!data.resultCode)
                                                        props.follow(u.id)
                                                })
                                        }}>Follow</button>
                                }
                            </div>
                        </div>
                    </div>
                )
            })
            }</div >)
}

export default Users;