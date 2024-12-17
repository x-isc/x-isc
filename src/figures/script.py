# 尝试使用完整的导入路径
from moviepy.editor import VideoFileClip


import os

def remove_audio_from_video(input_path, output_path):
    """
    从视频中移除音频并保存为新文件
    """
    try:
        # 读取视频文件
        video = VideoFileClip(input_path)
        
        # 创建无声视频
        video_without_audio = video.without_audio()
        
        # 保存新视频
        video_without_audio.write_videofile(
            output_path,
            codec='libx264',
            audio=False
        )
        
        # 关闭视频文件
        video.close()
        video_without_audio.close()
        
        print(f"已处理: {input_path} -> {output_path}")
        
    except Exception as e:
        print(f"处理 {input_path} 时发生错误: {str(e)}")

def main():
    # 需要处理的视频文件列表
    video_files = ['4o-mini.mov', '4o.mov', 'o1-mini.mov', 'o1.mov']
    
    # 获取当前脚本所在目录
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    for video_file in video_files:
        input_path = os.path.join(current_dir, video_file)
        
        # 生成输出文件名（在原文件名后添加 _noaudio）
        filename, ext = os.path.splitext(video_file)
        output_file = f"{filename}_noaudio{ext}"
        output_path = os.path.join(current_dir, output_file)
        
        if os.path.exists(input_path):
            remove_audio_from_video(input_path, output_path)
        else:
            print(f"文件不存在: {input_path}")

if __name__ == "__main__":
    main()
