package com.music.web.service;

import com.music.web.entity.Posting;
import com.music.web.vo.PostingVo;

import java.util.List;

/**
 * 帖子相关
 * Created by Administrator on 2017/4/29.
 */
public interface PostingService {
    //新建帖子
    boolean insertPosting(Posting posting);

    //删除帖子
    boolean deletePosting(int id);

    //获取帖子
    PostingVo selectPosting(int id);

    //获取所有的帖子
    List<PostingVo> selectPostings();

    //获取筛选帖子
    List<PostingVo> selectPostings(String filter,int type);

    //获取用户所有的帖子
    List<PostingVo> selectPostings(int uid);

    //获取所有的帖子
    List<PostingVo> selectPostings(int pageNum,int pageSize,String name);
}
