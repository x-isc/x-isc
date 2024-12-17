from PIL import Image

def resize_image(input_path, output_path, target_size):
    # 打开原始图片
    with Image.open(input_path) as img:
        # 使用LANCZOS重采样方法来获得更高质量的调整结果
        resized_img = img.resize(target_size, Image.Resampling.LANCZOS)
        
        # 保存调整后的图片，使用高质量设置
        resized_img.save(
            output_path,
            quality=95,  # JPEG质量设置（1-100）
            optimize=True  # 优化输出文件大小
        )

if __name__ == "__main__":
    # 输入和输出文件路径
    input_image = "./o1-pro-log.png"
    output_image = "./o1-pro-log-resized.png"
    
    # 目标尺寸 (宽 × 高)
    target_size = (736, 956)
    
    # 调整图片尺寸
    resize_image(input_image, output_image, target_size)
    print(f"图片已调整至 {target_size[0]} × {target_size[1]} 并保存为 {output_image}")
