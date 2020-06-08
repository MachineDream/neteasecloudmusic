<template>
    <div id="testDialog">
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
            <el-dialog
            v-dragDialog
            title="提示"
            :visible.sync="dialogVisible"
            :close-on-click-modal="false"
            width="30%">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name:"TestDialog",
    data(){
        return {
            dialogVisible:false
        }
    }
}
</script>

<style lang="less" scoped>

</style>